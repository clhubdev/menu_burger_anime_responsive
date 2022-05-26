function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        navbar.classList.toggle('open-nav');
    })
}

toggleMenu();

const lightModeIcon = document.getElementById('lightModeIcon');
const navbar = document.getElementById('navbar');
const logo = document.getElementById('logo');

// Always add this single event listener
lightModeIcon.addEventListener('click', () => {
    // Check the condition inside the listener, take action based on the current state
    if (navbar.classList.contains("dark-mode")) {
        navbar.classList.replace("dark-mode", "light-mode");
        lightModeIcon.src = "img/dark-mode.png";
        logo.src = "img/logo.png";
    } else {
        navbar.classList.replace("light-mode", "dark-mode");
        lightModeIcon.src = "img/light-mode.png";
        logo.src = "img/logoDarkMode.png";
    }
});

// function lightMode() {
//     const lightModeIcon = document.getElementById('lightModeIcon');
//     const navbar = document.getElementById('navbar');

//     if (navbar.classList.contains("dark-mode")) {
//         lightModeIcon.addEventListener('click', () => {
//             navbar.classList.replace("dark-mode", "light-mode");
//             lightModeIcon.src = "img/dark-mode.png";
//         })
//     } else {
//         lightModeIcon.addEventListener('click', () => {
//             navbar.classList.replace("light-mode", "dark-mode");
//             lightModeIcon.src = "img/light-mode.png";
//         })
//     }
// }

// lightMode();

console.log("Connexion réussie");