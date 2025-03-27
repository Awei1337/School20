let slideIndex = 0;
const slides = document.querySelectorAll('.slider .slides img');
const totalSlides = slides.length;

function showSlides() {
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > totalSlides) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 7000); // Change image every 7 seconds
}

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex > totalSlides) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = totalSlides}
    showCurrentSlide();
}

function showCurrentSlide() {
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Initialize the slideshow
showSlides();
