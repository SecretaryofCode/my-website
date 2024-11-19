// Einfaches Beispiel für Interaktivität
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    console.log("Website ist geladen!");
});
