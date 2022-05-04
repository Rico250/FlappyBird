/* eslint-disable space-before-blocks */

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const bird = new Image();
const bg = new Image();
const boden = new Image();

bird.src = "Bilder_spiel/bird.png";
bg.src = "Bilder_spiel/bg.png";
boden.src = "Bilder_spiel/boden.png";


const birdX = 10;
let birdY = 150;
const gravity = 1.5;

document.addEventListener("keydown", MoveUp);

const start = document.getElementById("start");
start.addEventListener("click", draw);


function MoveUp(){
    birdY -= 25;
}

function draw(){
    context.drawImage(bg, 0, 0);
    context.drawImage(bird, birdX, birdY);
    birdY += gravity;

    requestAnimationFrame(draw);
}

draw();