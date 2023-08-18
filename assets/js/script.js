/**
 * +1. Движение корабля игрока по нажатию клавиш
 * +2. Сделать выстрелы
 *  - создание пули
 *  - движение пули
 *  - проверка попадания пули в цель
 * +3. Сделать выбор игрока и запуск игры
 * +4. Враги и их движение
 * +5. "Полоса" жизни
 * +6. Если враг прошел вниз экрана, то минус "жизнь"
 * +7. Если конец "полосы" жизни, то конец
 */
/**
 * +1. Подсчет очков:
 *  - Показывать кол-во очков на экране.
 * +2. Изменение скорости врагов с увеличением кол-ва очков.
 * 3. Бонусы:
 *  - жизнь;
 *  - убить всех врагов на экране.
 * +4. Создание случайного кол-ва врагов после смерти одного
 */

console.log("All right! Let`s start...");

let app = document.querySelector("#game-elements");
let score = 0;

// console.dir(app);

function isHit(bullet) {
    let enemyArr = document.querySelectorAll(".enemy");
    let asteroidArr = document.querySelectorAll(".asteroid");
    let heart = document.querySelector(".heart");
    let bomb = document.querySelector(".bomb");

    for (const enemy of enemyArr) {
        if (enemy && !enemy.classList.contains("boom")) {
            let top = bullet.offsetTop > enemy.offsetTop && bullet.offsetTop < enemy.offsetTop + enemy.offsetHeight;
            let left = bullet.offsetLeft > enemy.offsetLeft && bullet.offsetLeft < enemy.offsetLeft + enemy.offsetWidth;

            if (top && left) {
                console.log("Hit!");
                enemy.classList.add("boom");
                enemy.classList.remove("skin1");
                playHitSound();
                updScore(1);
                for (let index = 0; index < getRandom(0, 3); index++) {
                    // console.log("Will be add " + index + " enemy.");
                    createEnemy();
                    if (index == 2) {
                        createAsteroid();
                        createBonus();
                    }
                }
                // console.log("Before timeout");
                setTimeout(function () {
                    enemy.remove();
                }, 2100)
                // console.log("After timeout");
                return true;
            }
        }
    }

    for (const aster of asteroidArr) {
        if (aster && !aster.classList.contains("boom")) {
            let top = bullet.offsetTop > aster.offsetTop && bullet.offsetTop < aster.offsetTop + aster.offsetHeight;
            let left = bullet.offsetLeft > aster.offsetLeft && bullet.offsetLeft < aster.offsetLeft + aster.offsetWidth;

            if (top && left) {
                console.log("Hit!");
                aster.classList.add("boom");
                playHitSound();
                // console.log("Before timeout");
                setTimeout(function () {
                    aster.remove();
                }, 900)
                // console.log("After timeout");
                return true;
            }
        }
    }

    if (heart) {
        let top = bullet.offsetTop > heart.offsetTop && bullet.offsetTop < heart.offsetTop + heart.offsetHeight;
        let left = bullet.offsetLeft > heart.offsetLeft && bullet.offsetLeft < heart.offsetLeft + heart.offsetWidth;

        if (top && left) {
            console.log("Hit!");
            lifesPlayer++;
            redrawHeartIconsPlayer();
            heart.remove();
            return true;
        }
    }

    if (bomb) {
        let top = bullet.offsetTop > bomb.offsetTop && bullet.offsetTop < bomb.offsetTop + bomb.offsetHeight;
        let left = bullet.offsetLeft > bomb.offsetLeft && bullet.offsetLeft < bomb.offsetLeft + bomb.offsetWidth;

        if (top && left) {
            console.log("Hit bomb!");
            bomb.remove();
            for (let i = 0; i < enemyArr.length; i++) {
                enemyArr[i].classList.add("boom");
                enemyArr[i].classList.remove("skin1");
                playHitSound();
                updScore(1);
                // console.log("Before timeout");
                setTimeout(function () {
                    enemyArr[i].remove();
                    for (let index = 0; index < getRandom(0, 3); index++) {
                        // console.log("Will be add " + index + " enemy.");
                        createEnemy();
                        if (index == 3) {
                            createAsteroid();
                        }
                    }
                }, 2100)

            }
            return true;
        }
    }
    return false;
}

function updScore(scr) {
    let scoreBlock = document.querySelector("#app .menu .score h1");

    // console.dir(scoreBlock);

    if (score + scr < 0) {
        score = 0;
    }
    else
        score += scr;

    scoreBlock.innerHTML = score;
}

function getRandom(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}