document.querySelector('.full-description-toggle').addEventListener('click', function() {
    const fullDescription = document.querySelector('.full-description');
    fullDescription.style.display = fullDescription.style.display === 'block' ? 'none' : 'block';
});
