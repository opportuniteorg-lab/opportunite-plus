// Attendre que toute la page soit chargée
document.addEventListener('DOMContentLoaded', () => {
    console.log("Le site d'OPPORTUNITÉ + est entièrement chargé et prêt !");
    
    // Ajout d'un défilement fluide pour les liens de navigation
    const links = document.querySelectorAll('nav a');
    
    for (const link of links) {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Si le lien commence bien par #, on gère le défilement fluide
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }
});
