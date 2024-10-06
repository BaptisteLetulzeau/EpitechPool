// Récupérer l'URL actuelle
const currentUrl = window.location.pathname;
// Sélectionner tous les liens
const links = document.querySelectorAll('.text-a');

links.forEach(link => {
    // Vérifier si le href du lien correspond à l'URL actuelle
    if (link.getAttribute('href') === currentUrl.split('/').pop()) {
        link.classList.add('active'); // Ajouter la classe 'active'
    }
});