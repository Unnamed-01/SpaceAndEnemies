let btnStartGame = document.getElementById("btn-start-game");
let btnRestartGame = document.getElementById("btn-restart-game");
let isGameOver = false;

// console.dir(btnStartGame);

redrawHeartIconsPlayer();

btnStartGame.onclick = function () {
    let skin = document.querySelector("input[type=radio]:checked").id;
    let startGameBlock = document.querySelector(".start-game");

    // console.dir(skin);

    startGameBlock.style.display = "none";
    createPlayer(skin);
    createEnemy();
    createEnemy();
    createBonus();

    playBackgroundSound();
}

btnRestartGame.onclick = function () {
    location.reload();
}

function endGame() {
    let endGameBlock = document.querySelector(".end-game");
    endGameBlock.classList.remove("hidden");
    app.innerHTML = "";
    isGameOver = true;
}