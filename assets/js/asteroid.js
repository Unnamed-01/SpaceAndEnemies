/**
 * +1. Движение астероида
 * +2. Попадание и уничтожение со взрывом
 * +3. Вращение астероида
 */

console.log("Asteroid connected.");

function createAsteroid() {
    if (isGameOver)
        return;
    let positionLeft = getRandom(0, document.querySelector("body").offsetWidth - 65) + "px";
    let aster = document.createElement("div");

    aster.className = "asteroid";
    aster.style.left = positionLeft;
    app.appendChild(aster);
    moveAster(aster);
}

function moveAster(asteroid) {
    let displacement = parseFloat((getRandom(10, 20) / 20).toFixed(2));
    // console.log(displacement);
    let rotation = displacement;
    // console.log(rotation);
    // console.dir(asteroid);
    let timerIDaster = setInterval(function () {
        asteroid.style.top = parseFloat(asteroid.offsetTop) + displacement + "px";
        rotation += displacement;
        asteroid.style.webkitTransform = "rotate(" + rotation + "deg)";
        if (asteroid.offsetTop + asteroid.offsetHeight > document.querySelector("body").offsetHeight) {
            asteroid.remove();
            updScore(-1);
            clearInterval(timerIDaster);
        }
    }, 1)
}

function createPlanet() {
    let skin = "skin" + getRandom(1, 4);
    let planet = document.createElement("div");
    planet.className = "planet " + skin;
    planet.style.left = getRandom(100, document.querySelector("body").offsetWidth + "px");

    let timerID = setInterval(function () {
        planet.style.top = planet.offsetTop + 10 + "px";

        if (planet.offsetTop > document.querySelector("body").offsetHeight) {
            planet.remove();
            clearInterval(timerID);
            setTimeout(function () { createPlanet(); }, getRandom(1000, 100000))
        }
    })

    app.appendChild(planet);
}

setTimeout(function () {
    createPlanet()
}, getRandom(1000, 10000))