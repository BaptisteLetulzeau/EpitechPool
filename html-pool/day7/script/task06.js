var divCoos = document.querySelector("footer div:nth-child(2)");

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
var isDraggable = false;
let startX, startY;
let currentTranslateX = 0,
  currentTranslateY = 0;

currentX = canvas.width / 2;
currentY = canvas.height / 2;

canvas.addEventListener("mousedown", function (e) {
  isDraggable = true;
  startX = e.clientX;
  startY = e.clientY;
});

document.addEventListener("mousemove", function (e) {
  if (isDraggable) {
    let deltaX = e.clientX - startX;
    let deltaY = e.clientY - startY;

    canvas.style.transform = `translate(${currentTranslateX + deltaX}px, ${
      currentTranslateY + deltaY
    }px)`;

    divCoos.textContent = `New Coordinates => {x:${currentTranslateX + deltaX}, y:${currentTranslateY + deltaY}}`;
  }
});

document.addEventListener("mouseup", function (e) {
  if (isDraggable) {
    let deltaX = e.clientX - startX;
    let deltaY = e.clientY - startY;

    currentTranslateX += deltaX;
    currentTranslateY += deltaY;

    isDraggable = false;
  }
});