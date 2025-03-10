// Слайдшоу
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 7000); // Изменить фото каждые 7 секунд
}

// Открытие/закрытие текста
document.querySelector('.full-description-toggle').addEventListener('click', function() {
    let description = document.querySelector('.full-description');
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
});
