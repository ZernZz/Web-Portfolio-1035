// Toggle Theme
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
let darkMode = true;

if (darkMode) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    darkMode = !darkMode;
    if (darkMode) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function() {
    scrollFunction();
    sectionHighlight();
};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
const navItems = document.querySelectorAll('.nav-link');

navItems.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.classList.remove('active');
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight Active Section in Navbar
function sectionHighlight() {
    let scrollPos = window.scrollY || window.pageYOffset;
    navItems.forEach(link => {
        let section = document.querySelector(link.getAttribute('href'));
        if (
            section.offsetTop <= scrollPos + 100 &&
            (section.offsetTop + section.offsetHeight) > scrollPos + 100
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

window.addEventListener('load', sectionHighlight);
window.addEventListener('scroll', sectionHighlight);
