const button = document.querySelector(".main-circle");
const circles = document.querySelectorAll(".circles");
const cross = document.querySelector(".cross");
const crossbg = document.querySelector(".bg");

button.addEventListener("click", function() {
    cross.classList.toggle("show");
    crossbg.classList.toggle("show");
    circles.forEach(element => {
        element.classList.toggle("show");
    });

});

const button2 = document.querySelector(".main-circle2");
const cross2 = document.querySelector(".cross2");

button2.addEventListener("click", function() {
    cross2.classList.toggle("show2");
    crossbg.classList.toggle("show2");
    circles.forEach(element => {
        element.classList.toggle("show2");
    });

});