console.log("Enemy connected.");

/**
 * 1. Создание div со случайными координатами начала движения
 * 2. Движение вниз экрана
 */
function createEnemy() {
    if (isGameOver)
        return;
    let positionLeft = getRandom(0, document.querySelector("body").offsetWidth - 150) + "px";
    let enemy = document.createElement("div");

    // console.log("Left position for enemy: ", positionLeft);

    enemy.className = "enemy skin1";
    enemy.style.left = positionLeft;
    app.appendChild(enemy);
    moveEnemy(enemy)
}

function moveEnemy(enemy) {
    let timerIDenemy = setInterval(function () {
        // console.log(score / 10);
        enemy.style.top = enemy.offsetTop + 15 + (score / 10) + "px";
        // console.dir(enemy);
        // console.log(enemy.offsetTop + enemy.offsetHeight);
        if (enemy.offsetTop + enemy.offsetHeight > document.querySelector("body").offsetHeight) {
            enemy.remove();
            createEnemy();
            damagePlayer();
            updScore(-10);
            clearInterval(timerIDenemy);
        }
    }, 1)
}