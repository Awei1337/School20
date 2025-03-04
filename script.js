function toggleDescription() {
    var fullDesc = document.getElementById('full-description');
    if (fullDesc.classList.contains('hidden')) {
        fullDesc.classList.remove('hidden');
    } else {
        fullDesc.classList.add('hidden');
    }
}
