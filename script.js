document.querySelector('.read-more').addEventListener('click', function() {
    const fullDescription = document.querySelector('.full-description');
    
    // Анимация
    if (fullDescription.style.maxHeight) {
        fullDescription.style.maxHeight = null;
        this.textContent = 'Читать дальше';
    } else {
        fullDescription.style.maxHeight = fullDescription.scrollHeight + "px";
        this.textContent = 'Скрыть';
    }
});
