const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Verifica tema salvo no localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}

themeToggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let switchToTheme = theme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', switchToTheme);
    localStorage.setItem('theme', switchToTheme);
    
    // Altera o ícone
    themeIcon.textContent = switchToTheme === 'dark' ? '☀️' : '🌙';
});