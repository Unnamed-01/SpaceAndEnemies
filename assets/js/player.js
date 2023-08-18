console.log("Player connected.");

// let player = document.querySelector("#player");
// let player = document.getElementById("player");
let player;
let lifesPlayer = 3;
let lifesBlock = document.querySelector(".menu .lifes");

function createPlayer(skin) {
    player = document.createElement("div");
    player.className = skin;
    player.id = "player";

    app.appendChild(player);
}

// console.dir(player);
// console.dir(lifesBlock);

document.onkeydown = function (event) {
    // console.dir(event.code);
    switch (event.code) {
        case "ArrowLeft":
        case "KeyA":
            moveLeft();
            break;
        case "ArrowRight":
        case "KeyD":
            moveRight();
            break;
        case "Space":
            makeShot();
            break;
    }
}

function moveLeft() {
    // player.style.left--
    if (player.offsetLeft - player.offsetWidth * 0.5 > 0)
        player.style.left = (player.offsetLeft - player.offsetWidth * 0.5) + "px";
}

function moveRight() {
    // player.style.left++
    if (player.offsetLeft + player.offsetWidth * 1.5 < app.offsetWidth)
        player.style.left = (player.offsetLeft + player.offsetWidth * 0.5) + "px";
}

function makeShot() {
    let bullet = document.createElement("div");

    bullet.classList.add("bullet");
    bullet.style.top = player.offsetTop + "px";
    bullet.style.left = player.offsetLeft + player.offsetWidth / 2 + "px";

    app.appendChild(bullet);

    playShotSound();

    let timerID = setInterval(function () {
        if (isHit(bullet) || bullet.offsetTop < 0) {
            bullet.remove();
            clearInterval(timerID);
        }
        bullet.style.top = bullet.offsetTop - 10 + "px";
    }, 50)
}

function damagePlayer() {
    lifesPlayer--;
    if (lifesPlayer <= 0) {
        endGame();
    }
    redrawHeartIconsPlayer();
}

function redrawHeartIconsPlayer() {
    lifesBlock.innerHTML = "";
    for (let i = 0; i < lifesPlayer; i++) {
        let emptySpan = document.createElement("span");
        lifesBlock.appendChild(emptySpan);
    }
}