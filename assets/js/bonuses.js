console.log("Bonuses connected.");

/**
 * 1. Создание div со случайными координатами начала движения
 * 2. Движение вниз экрана
 */
function createBonus() {
    if (isGameOver)
        return;
    let positionLeft = getRandom(0, document.querySelector("body").offsetWidth - 50) + "px";
    let bonus = document.createElement("div");

    switch (getRandom(1, 2)) {
        case 1:
            console.log("Creating heart");
            bonus.className = "bonus heart";
            break;
        case 2:
            console.log("Creating bomb");
            bonus.className = "bonus bomb";
            bonus.innerHTML = '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#0e6ae0;}.cls-2{fill:#0593ff;}.cls-3{fill:#d8e1ef;}</style></defs><title/><g id="Bomb"><path class="cls-1" d="M19,14a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l4-4a1,1,0,0,1,1.42,1.42l-4,4A1,1,0,0,1,19,14Z"/><path class="cls-2" d="M20.71,14.29l-3-3a1,1,0,0,0-1.42,0l-2,2.05a1,1,0,0,0-.28.85,1,1,0,0,0,.5.73,7,7,0,0,1,2.62,2.62,1,1,0,0,0,.73.5H18a1,1,0,0,0,.71-.29l2.05-2.05A1,1,0,0,0,20.71,14.29Z"/><circle class="cls-3" cx="11" cy="21" r="9"/><path class="cls-2" d="M6,21a1,1,0,0,1-1-1,5,5,0,0,1,5-5,1,1,0,0,1,0,2,3,3,0,0,0-3,3A1,1,0,0,1,6,21Z"/><path class="cls-2" d="M23,6a1,1,0,0,1-1-1V3a1,1,0,0,1,2,0V5A1,1,0,0,1,23,6Z"/><path class="cls-2" d="M20.17,7.17a1,1,0,0,1-.71-.29L18.05,5.46a1,1,0,0,1,1.41-1.41l1.42,1.41a1,1,0,0,1,0,1.42A1,1,0,0,1,20.17,7.17Z"/><path class="cls-2" d="M19,10H17a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Z"/><path class="cls-2" d="M23,16a1,1,0,0,1-1-1V13a1,1,0,0,1,2,0v2A1,1,0,0,1,23,16Z"/><path class="cls-2" d="M27.24,14.24a1,1,0,0,1-.7-.29l-1.42-1.41a1,1,0,1,1,1.42-1.42L28,12.54A1,1,0,0,1,28,14,1,1,0,0,1,27.24,14.24Z"/><path class="cls-2" d="M29,10H27a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Z"/><path class="cls-2" d="M25.83,7.17a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l1.42-1.41A1,1,0,0,1,28,5.46L26.54,6.88A1,1,0,0,1,25.83,7.17Z"/></g></svg>';
    }

    bonus.style.left = positionLeft;
    app.appendChild(bonus);
    moveBonus(bonus);
}

function moveBonus(bonus) {
    let timerIDbonus = setInterval(function () {
        bonus.style.top = bonus.offsetTop + 25 + "px";
        // console.dir(bonus);
        if (bonus.offsetTop + bonus.offsetHeight > document.querySelector("body").offsetHeight) {
            bonus.remove();
            // createBonus();
            clearInterval(timerIDbonus);
        }
    }, 1)
}