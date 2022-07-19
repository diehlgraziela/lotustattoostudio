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

//Gallery
(function () {
    let filterOption = document.querySelectorAll('.filter-option');
    let galleryImage = document.querySelectorAll('.gallery-image');

    filterOption.forEach((option) => {
        option.addEventListener("click", (e) => {
            e.preventDefault();

            document.querySelector(".filter-options .active").classList.remove("active");
            e.target.classList.add("active");

            let filter = e.target.dataset.filter;

            galleryImage.forEach((item) => {
                if (filter === 'all') {
                    item.style.display = 'block';
                } else {

                    if (item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            })
        })
    })

})();