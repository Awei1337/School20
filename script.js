document.addEventListener("DOMContentLoaded", function() {
  const heroLink = document.querySelector('.hero-link');
  
  // При наведении
  heroLink.addEventListener('mouseover', function() {
    heroLink.style.color = "#007bff";  // меняем на синий цвет при наведении
  });

  // При уходе курсора
  heroLink.addEventListener('mouseout', function() {
    heroLink.style.color = "#fff";  // возвращаем белый цвет
  });

  // При нажатии (клик)
  heroLink.addEventListener('mousedown', function() {
    heroLink.style.color = "#0056b3";  // темно-синий при клике
  });

  // При отпускании кнопки мыши
  heroLink.addEventListener('mouseup', function() {
    heroLink.style.color = "#007bff";  // возвращаем синий цвет при отпускании
  });
});
