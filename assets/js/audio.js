console.log("Audio connected.");

let audioPlayer = document.getElementById("audio");
let shotAudio;
let hitAudio;
let soundBtn = document.querySelector(".menu .sound");
let soundOnIcon = document.querySelector(".menu .sound .sound-on");
let soundOffIcon = document.querySelector(".menu .sound .sound-off");
let muted = true;

// console.dir(audioPlayer);

function playShotSound() {
    shotAudio = new Audio("assets/sound/rikochet.mp3")
    shotAudio.volume = 0.3;
    shotAudio.muted = !muted;
    shotAudio.play();
}

function playBackgroundSound() {
    audioPlayer.volume = 0.3;
    audioPlayer.play();
}

function playHitSound() {
    hitAudio = new Audio("assets/sound/boom" + getRandom(1, 4) + ".mp3");
    // console.log(hitAudio.src);
    hitAudio.volume = 0.3;
    hitAudio.muted = !muted;
    hitAudio.play();
}

soundBtn.onclick = function () {
    if (muted) {
        soundOnIcon.classList.add("hidden");
        soundOffIcon.classList.remove("hidden");
        muted = false;
    }
    else {
        soundOffIcon.classList.add("hidden");
        soundOnIcon.classList.remove("hidden");
        muted = true;
    }
    audioPlayer.muted = !muted;
}