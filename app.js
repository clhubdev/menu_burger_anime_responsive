function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        navbar.classList.toggle('open-nav');
    })
}

toggleMenu();

console.log("Connexion réussie")