// Adiciona uma animação suave ao rolar a página (efeito Fade In)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

// Aplicando aos elementos quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });
});
// ====== Efeito Paralaxe nas Imagens ======
window.addEventListener('scroll', () => {
    // Pega a posição da rolagem
    const scrolled = window.scrollY;
    
    // Seleciona a imagem do topo (Hero) e a imagem da seção "Sobre"
    const parallaxImages = document.querySelectorAll('.hero-image img, .sobre-midia img');

    parallaxImages.forEach(img => {
        // Multiplicador de velocidade (0.15 = move devagarzinho criando a ilusão 3D)
        const speed = 0.15;
        img.style.transform = `translateY(${scrolled * speed}px)`;
    });
});