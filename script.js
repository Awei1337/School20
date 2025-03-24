document.addEventListener('DOMContentLoaded', function() {
    let slides = document.querySelectorAll('.mySlides');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 7000); // Сменять слайды каждые 7 секунд

    // Показывать/скрывать описание
    const showDescriptionBtn = document.getElementById('show-description');
    const fullDescription = document.getElementById('full-description');
    
    showDescriptionBtn.addEventListener('click', () => {
        if (fullDescription.style.display === 'none' || fullDescription.style.display === '') {
            fullDescription.style.display = 'block';
        } else {
            fullDescription.style.display = 'none';
        }
    });

    showSlide(currentSlide); // Изначально показать первый слайд
});
