// Script de inicialização geral
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfólio Personal Trainer carregado com sucesso!");
    
    // Lógica para alterar o background da Navbar ao rolar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });
});