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
    
    // City cards scroll functionality
    const scrollContainer = document.querySelector('.overflow-x-auto');
    const leftArrow = document.querySelector('.fa-chevron-left').parentElement;
    const rightArrow = document.querySelector('.fa-chevron-right').parentElement;
    
    if (leftArrow && rightArrow) {
        leftArrow.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
        });
        
        rightArrow.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
});
