function toggleFullDescription() {
    const fullDescription = document.querySelector('.full-description');
    const btn = document.querySelector('.read-more-btn');

    if (fullDescription.style.display === 'block') {
        fullDescription.style.display = 'none';
        btn.textContent = 'Читать далее';
    } else {
        fullDescription.style.display = 'block';
        btn.textContent = 'Свернуть';
    }
}
