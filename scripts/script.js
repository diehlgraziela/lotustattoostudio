//Burger menu
let burgerMenu = document.querySelector(".burger-menu");
let navLinks = document.querySelectorAll("nav ul li a");
let nav = document.querySelector("header nav");

burgerMenu.addEventListener("click", () => {

    nav.classList.toggle("active");
    burgerMenu.classList.toggle("active");
})

for (link of navLinks) {
    link.addEventListener("click", () => {
        if (nav.classList.contains('active')) {
            nav.classList.toggle("active");
        }
    })
}