// Простой скрипт для плавного перехода к полному описанию
document.querySelector('.full-description-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('full-description').scrollIntoView({ behavior: 'smooth' });
});
