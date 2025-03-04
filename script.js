document.addEventListener("DOMContentLoaded", function() {
    let circles = document.querySelectorAll(".circle");
    circles.forEach(circle => {
        let randomX = Math.random() * window.innerWidth;
        let randomY = Math.random() * window.innerHeight;
        circle.style.left = `${randomX}px`;
        circle.style.top = `${randomY}px`;
    });
});