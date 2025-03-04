function toggleDescription() {
    const description = document.getElementById('full-description');
    const showMoreButton = document.querySelector('.show-more');

    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block";
        showMoreButton.textContent = "Скрыть описание";
    } else {
        description.style.display = "none";
        showMoreButton.textContent = "Читать полное описание";
    }
}
