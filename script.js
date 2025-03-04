function toggleDescription() {
    const fullDescription = document.getElementById('full-description');
    if (fullDescription.classList.contains('hidden')) {
        fullDescription.classList.remove('hidden');
    } else {
        fullDescription.classList.add('hidden');
    }
}
