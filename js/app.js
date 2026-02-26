
// alert('Hello World');

const canvas = document.querySelector(`#etch-a-sketch`);
const ctx = canvas.getContext(`2d`);
const shakeButton = document.querySelector(`.shake`);
const {width, height} = canvas;

ctx.lineJoin = `round`;
ctx.lineCap = `round`;
ctx.lineWidth = 10;

ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(100, 200);
ctx.stroke();

// Create Random Starting Position Functions

console.log(width, height);

function randomStart(maxWidth, maxHeight) {
    widthPosition = Math.floor(Math.random() * maxWidth + 1);
    heightPosition = Math.floor(Math.random() * maxHeight + 1);

    return [widthPosition, heightPosition];
}