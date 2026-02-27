
// alert('Hello World');

const canvas = document.querySelector(`#etch-a-sketch`);
const ctx = canvas.getContext(`2d`);
const shakeButton = document.querySelector(`.shake`);
const {width, height} = canvas;
const [startX, startY] =  randomStart(width, height);

// Function Declarations
function randomStart(width, height) {
    const widthPosition = Math.floor(Math.random() * width + 1);
    const heightPosition = Math.floor(Math.random() * height + 1);

    return [widthPosition, heightPosition];
}

function handleKey(e) {
    // e.preventDefault();
    console.log(`Handling Key`);
}

ctx.lineJoin = `round`;
ctx.lineCap = `round`;
ctx.lineWidth = 10;

ctx.beginPath();
ctx.moveTo(startX, startY);
ctx.lineTo(startX, startY);
ctx.stroke();

window.addEventListener('keydown', handleKey);

console.log(width, height);