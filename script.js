// Индекс текущего слайда
let slideIndex = 0;

// Функция для показа слайдов
function showSlides() {
    let slides = document.querySelectorAll('.mySlides');
    
    // Скрываем все слайды
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Переход к следующему слайду
    slideIndex++;
    
    // Если последний слайд, начинаем с первого
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Показываем текущий слайд
    slides[slideIndex - 1].style.display = "block";  
    
    // Настройка интервала между сменой слайдов
    setTimeout(showSlides, 7000); // Меняем слайд каждые 7 секунд
}

// Функция для перехода на определенный слайд (при ручном переключении)
function currentSlide(n) {
    let slides = document.querySelectorAll('.mySlides');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Скрываем все слайды
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Показываем выбранный слайд
    slides[slideIndex - 1].style.display = "block";
}

// Функции для ручного переключения слайдов
function plusSlides(n) {
    currentSlide(slideIndex += n);
}

// Запуск слайдшоу
showSlides();
