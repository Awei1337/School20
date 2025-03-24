document.addEventListener("DOMContentLoaded", function() {
    // Гамбургер-меню
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    menuToggle.addEventListener("click", function() {
        navbar.style.display = (navbar.style.display === "block") ? "none" : "block";
    });

    // Кнопка "Показать описание"
    const showDescBtn = document.getElementById("show-description");
    const aboutSchool = document.getElementById("about-school");

    showDescBtn.addEventListener("click", function() {
        aboutSchool.style.display = "block";
        showDescBtn.style.display = "none";
    });

    // Слайдшоу
    let slideIndex = 0;
    function showSlides() {
        let slides = document.querySelectorAll(".mySlides");
        slides.forEach(slide => slide.style.display = "none");
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].style.display = "block";
        setTimeout(showSlides, 7000);
    }
    showSlides();
});
