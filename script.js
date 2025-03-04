// Функция для переключения видимости полного описания
function toggleDescription() {
  var fullDescription = document.querySelector('.full-description');
  var readMore = document.querySelector('.read-more');
  if (fullDescription.style.display === 'none' || fullDescription.style.display === '') {
    fullDescription.style.display = 'block';
    readMore.textContent = 'Скрыть описание';
  } else {
    fullDescription.style.display = 'none';
    readMore.textContent = 'Читать дальше';
  }
}
