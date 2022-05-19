/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable space-before-blocks */

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const bird = new Image();
const bg = new Image();
const boden = new Image();
const p1 = new Image();
const p2 = new Image();

bird.src = "Bilder_spiel/bird.png";
bg.src = "Bilder_spiel/bg.png";
boden.src = "Bilder_spiel/boden.png";
p1.src = "Bilder_spiel/pipeNorth.png";
p2.src = "Bilder_spiel/pipeSouth.png";

const gap = 90;
const birdX = 10;
let birdY = 150;
const gravity = 1.8;

document.addEventListener("keydown", MoveUp);


function MoveUp(){
    birdY -= 35;
}
const pipe = [];
pipe[0] = {
    x: canvas.width,
    y: 0
};

function draw(){
    context.drawImage(bg, 0, 0);

    for (let i = 0; i < pipe.length; i++){
        const constant = p1.height + gap;
        context.drawImage(p1, pipe[i].x, pipe[i].y);
        context.drawImage(p2, pipe[i].x, pipe[i].y + constant);

        pipe[i].x--;

        if (pipe[i].x == 125){
            pipe.push({
                x: canvas.width,
                y: Math.floor(Math.random() * p1.height) - p1.height
            });
        }
        if (birdX + bird.width >= pipe[i].x && birdX <= pipe[i].x + p1.width && (birdY <= pipe[i].y + p1.height || birdY + bird.height >= pipe[i].y + constant) || birdY + bird.height >= canvas.height - boden.height){
        location.reload();
        }
 }

    context.drawImage(boden, 0, canvas.height - boden.height);
    context.drawImage(bird, birdX, birdY);
    birdY += gravity;


    requestAnimationFrame(draw);
}

draw();