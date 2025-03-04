document.querySelector('.read-more').addEventListener('click', function() {
    const fullDescription = document.querySelector('.full-description');
    fullDescription.style.display = fullDescription.style.display === 'block' ? 'none' : 'block';
    this.textContent = fullDescription.style.display === 'block' ? 'Скрыть' : 'Читать дальше';
});
