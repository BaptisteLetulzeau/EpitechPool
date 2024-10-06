const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
let music = document.getElementsByTagName('pre')
const buttons = document.querySelector('div button')
const pauseBtn = document.querySelector('footer button:nth-child(1)');
const stopBtn = document.querySelector('footer button:nth-child(2)');
const muteBtn = document.querySelector('footer button:nth-child(3)');

function drawTriangle() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(6, 6);
    context.lineTo(14, 10);
    context.lineTo(6, 14);
    context.closePath();
    
    context.fillStyle = 'white';
    context.fill();
    
    context.lineWidth = 1;
    context.strokeStyle = 'black';
    context.stroke();
}

drawTriangle()

const audio = new Audio("./script/dame tu cosita.mp3");

canvas.addEventListener('click', function () {
    audio.play()
})

pauseBtn.addEventListener('click', function () {
    audio.pause()
})

stopBtn.addEventListener('click', function () {
    audio.pause()
    audio.currentTime = 0;
})

muteBtn.addEventListener('click', function () {
    audio.muted = !audio.muted;
})

