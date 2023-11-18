document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementById('menuIcon');
    var navMenu = document.getElementById('navMenu');
    var navTitle = document.getElementById('navTitle');

    // Adiciona um evento de clique à barra de menu
    menuIcon.addEventListener('click', function () {
        // Alterna a visibilidade do menu de navegação
        if (navMenu.style.display === 'block') {
            navMenu.style.display = 'none';
            navTitle.style.display = '';
        } else {
            navMenu.style.display = 'block';
            navTitle.style.display = 'none';
        }
    });
});