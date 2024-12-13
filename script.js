// Smooth scrolling for navigation links
document.querySelectorAll('.nav-item a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Show more information on clicking "Read More" button
document.querySelectorAll('.btn-project').forEach(button => {
    button.addEventListener('click', function () {
        const projectId = this.closest('.project-card').id;
        alert(`You clicked on project: ${projectId}`);
    });
});


// Typed.js initialization for dynamic typing effect in the hero section
var typeData = new Typed(".role", {
    strings: [
        "Full Stack Developer",
        "Web Developer",
        "UI-UX Designer",
        "Backend Developer",
        "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});


// Floating effect for icons in hero section
const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
    icon.addEventListener('mouseover', function () {
        icon.style.transform = 'scale(1.1)';
    });
    icon.addEventListener('mouseout', function () {
        icon.style.transform = 'scale(1)';
    });
});

// Add sticky navigation bar on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});


// Lazy loading for project images
const projectImages = document.querySelectorAll('.project-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target.querySelector('img');
            img.src = img.getAttribute('data-src');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

projectImages.forEach(image => {
    observer.observe(image);
});
