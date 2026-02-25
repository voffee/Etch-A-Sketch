
// alert('Hello World');

const canvas = document.querySelector(`#etch-a-sketch`);
const ctx = canvas.getContext(`2d`);
const shakeButton = document.querySelector(`.shake`);

ctx.lineJoin = `round`;
ctx.lineCap = `round`;
ctx.lineWidth = 10;

ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(100, 200);
ctx.stroke();