const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");


let gravity = 0.6;
let player;
let jump = false;
let backgroundChunks = [];
let cactuses = [];
let speedUpRate = 0.1;
let score = 0;
let gameOver = false;
let animateFrame;


window.addEventListener("keydown", () => {
    if (player.y == 230)
    {
        player.jump();
    } else
    {
        return null;
    }
});


function init()
{
    canvas.width = window.innerWidth;
    canvas.height = 300;

    player = new Player();

    for (let i = 0; i < 200 ; i++)
    {
        backgroundChunks[i] = new Ground(i*300);
    } 

    for (let i = 0; i < 100; i++)
    {
        cactuses[i] = new Cactus(1000+i*300+Math.floor(Math.random() * (1000 - 200 + 1) + 200));
        cactuses[i].move();
    }
}

function renderer()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    ctx.font = '20px "Press Start 2P"';
    ctx.fillText(score, canvas.width-200, 40);

    player.render();
    player.applyPhysics();

    for (let i = 0; i < cactuses.length; i++)
    {
        cactuses[i].render();
        cactuses[i].move();

        if ((player.y > cactuses[i].y) || (cactuses[i].y > player.y && player.y + player.h > cactuses[i].y + cactuses[i].h))
        {
            if ((player.x < cactuses[i].x && player.x + player.w > cactuses[i].x) || (player.x > cactuses[i].x && player.x < cactuses[i].x + cactuses[i].w) || (player.x == cactuses[i].x && player.x + player.w > cactuses[i].x + cactuses[i].w) || (player.x + player.w == cactuses[i].x + cactuses[i].w && player.x < cactuses[i].x))
            {
                gameOver = true;
            }
        }

    }

    for (let i = 0; i < backgroundChunks.length; i++)
    {
        backgroundChunks[i].render();
        backgroundChunks[i].move();
    } 


    animateFrame = requestAnimationFrame(renderer);
}




function StartGame()
{
    init();
    renderer();

    setInterval(speedUpRate += 1, 3000);
}



setInterval(StartGame(), 10);

let audio = new Audio();
audio.src = "fail.mp3";


setInterval(() => {
    if (!gameOver)
    {
        score++;

    } else
    {
        cancelAnimationFrame(animateFrame);

        audio.play();
        setTimeout(audio = null, 1000);

        player.audio = null;
        document.querySelector("div").style.display = "block";
        document.querySelector("div").addEventListener("click", () => {
            document.location.href = "index.html";
        });
    }
}, 100);

