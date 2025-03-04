
document.querySelector('.full-description-toggle').addEventListener('click', function() {
    const description = document.querySelector('.full-description');
    description.style.display = description.style.display === 'block' ? 'none' : 'block';
});
