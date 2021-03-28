const slides = document.getElementsByClassName('slide');
const prev = document.getElementsByClassName('btnLeft');
const next = document.getElementsByClassName('btnRight');

let current = 0;


function showSlides(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[n].style.display = "block";
}

function prevSlide() {
    if (current > 0) current -= 1;
    else current = slides.length - 1;
    showSlides(current);
}

function nextSlide() {
    if (current < slides.length - 1) current += 1;
    else current = 0;
    showSlides(current);
}