// Smooth scroll for nav links
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in effect on scroll
const sections = document.querySelectorAll('section');

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Back-to-top button
const topBtn = document.createElement('button');
topBtn.textContent = "⬆";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    topBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});