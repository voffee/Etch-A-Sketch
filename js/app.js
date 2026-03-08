
// alert('Hello World');

const canvas = document.querySelector(`#etch-a-sketch`);
const ctx = canvas.getContext(`2d`);
const shakeButton = document.querySelector(`.shake`);
const {width, height} = canvas;
const MOVE_AMOUNT = 5;
let [startX, startY] =  randomStart(width, height);

// Function Declarations
function randomStart(width, height) {
    let widthPosition = Math.floor(Math.random() * width + 1);
    let heightPosition = Math.floor(Math.random() * height + 1);

    return [widthPosition, heightPosition];
}

function draw({ key }) {
    // Used object destructuring instead of receiving passed object and isolating property we want.
    console.log(key);

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    // startX = startX - MOVE_AMOUNT;
    // startY = startY - MOVE_AMOUNT;
    
    switch (key) {
        case `ArrowUp`:
            startY = startY - MOVE_AMOUNT;
            break;

        case `ArrowDown`:
            startY = startY + MOVE_AMOUNT;
            break;

        case `ArrowLeft`:
            startX = startX - MOVE_AMOUNT;
            break;

        case `ArrowRight`:
            startX = startX + MOVE_AMOUNT;
            break;

        default:
            break;
    }

    ctx.lineTo(startX, startY);
    ctx.stroke();
}

function handleKey(e) {
    if (e.key.includes(`Arrow`) === true) {
        e.preventDefault();
        draw({ key: e.key});
    }
}

ctx.lineJoin = `round`;
ctx.lineCap = `round`;
ctx.lineWidth = 5;

let hue = 0;
ctx.strokeStyle = `hsl(100, 100%, 50%)`;
ctx.beginPath();
ctx.moveTo(startX, startY);
ctx.lineTo(startX, startY);
ctx.stroke();

window.addEventListener('keydown', handleKey);

console.log(width, height);