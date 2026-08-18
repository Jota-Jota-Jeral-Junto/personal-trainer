// ====== Animação de Surgimento (Fade In) das Seções ======
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });
});

// ====== Efeito Paralaxe (Apenas na imagem do topo / Hero) ======
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    
    // Alvo restrito apenas à imagem do topo para não afetar o print do Instagram
    const parallaxImages = document.querySelectorAll('.hero-image img');

    parallaxImages.forEach(img => {
        const speed = 0.15;
        img.style.transform = `translateY(${scrolled * speed}px)`;
    });
});