const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
});


let slideIndex = 1;
changeBookCover(slideIndex);

function plusSlides(n) {
    slideIndex += n;
    changeBookCover(slideIndex);
}

function changeBookCover(n) {
    let i;
    let slides = document.getElementsByClassName("bookSlide-div");

    if (n > slides.length) { slideIndex = 1; } 
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.menu-items');

    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});









