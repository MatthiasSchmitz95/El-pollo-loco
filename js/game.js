let canvas;
let world;
let keyboard = new Keyboard();
let IntervallIds = [];
let win = 'You won';
let lose = 'Game over';
let fullscreencheck = false;
let mute = false;
let instruction = false;
let gameStarted = false;
let gameOver = false;


let walking_sound = new Audio('audio/walking.mp3');
let death_sound = new Audio('audio/death-sound.mp3');
let hurt_sound = new Audio('audio/hurt-sound.mp3');
let jump_sound = new Audio('audio/jump-sound.mp3');
let chicken_sound = new Audio('audio/chicken-sound.mp3');
let background_sound = new Audio('audio/background-sound.mp3');
let collect_sound = new Audio('audio/collect-coin.mp3');



function playBackgroundSound() {
    background_sound.loop = true;
    background_sound.play();
}


async function init() {
    await startLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    removeCover();
    keyboardCheck();
    gameStarted = true;

}

function keyboardCheck() {
    window.addEventListener('keydown', (e) => {
        //console.log(e);
        let key = e['code'];
        if (key === "Space") {
            // console.log("Space");
            keyboard.SPACE = true;

        }
        if (key === "ArrowRight") {
            // console.log(keyboard);
            keyboard.RIGHT = true;

        }

        if (key === "ArrowLeft") {
            // console.log(keyboard);
            keyboard.LEFT = true;

        }

        if (key === "ArrowDown") {
            // console.log(keyboard);
            keyboard.DOWN = true;

        }

        if (key === "ArrowUp") {
            // console.log(keyboard);
            keyboard.UP = true;

        }
        if (key === "KeyD") {
            // console.log(keyboard);
            keyboard.D = true;

        }


    })

    window.addEventListener('keyup', (e) => {
        //console.log(e);
        let key = e['code'];
        if (key === "Space") {
            // console.log("Space");
            keyboard.SPACE = false;

        }
        if (key === "ArrowRight") {
            // console.log(keyboard);
            keyboard.RIGHT = false;

        }

        if (key === "ArrowLeft") {
            // console.log(keyboard);
            keyboard.LEFT = false;

        }

        if (key === "ArrowDown") {
            //console.log(keyboard);
            keyboard.DOWN = false;

        }

        if (key === "ArrowUp") {
            // console.log(keyboard);
            keyboard.UP = false;

        }
        if (key === "KeyD") {
            // console.log(keyboard);
            keyboard.D = false;

        }
    });
}


function removeCover() {
    document.getElementById('cover').style.display = 'none';
    playBackgroundSound();


}



function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    IntervallIds.push({ id, time, fn });
}

function resumeGame() {
    IntervallIds.forEach(interval => {
        const { time, fn } = interval;
        setStoppableInterval(() => fn(), time);
    });
}

function stopGame() {
    IntervallIds.forEach(interval => clearInterval(interval.id));
    //IntervallIds = [];
}

function endGame() {
    stopGame();
    gameOver = true;
    document.getElementById('game-over-container').style.display = '';

}

function playAgain() {
    init();
    document.getElementById('game-over-container').style.display = 'none';
}

function backToMenu() {
    document.getElementById('game-over-container').style.display = 'none';
    document.getElementById('cover').style.display = '';
}


function fullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    if (!fullscreencheck) {
        enterFullscreen(fullscreen);

    } else {
        exitFullscreen()

    }

}

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {  // iOS Safari
        element.webkitRequestFullscreen();
    }
    fullscreencheck = true;
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();

    }
    fullscreencheck = false;
}

function muteSpeaker() {
    let speaker = document.getElementById('speaker');
    let muteing = document.getElementById('mute');
    if (!mute) {
        speaker.style.display = 'none';
        muteing.style.display = '';
        mute = true;
        soundMuteToggle(true);

    } else {
        speaker.style.display = '';
        muteing.style.display = 'none';
        mute = false;
        soundMuteToggle(false);
    }
}

function soundMuteToggle(stance) {
    walking_sound.muted = stance;
    death_sound.muted = stance;
    hurt_sound.muted = stance;
    jump_sound.muted = stance;
    chicken_sound.muted = stance;
    background_sound.muted = stance;
    collect_sound.muted = stance;

}

function showIntsructions() {
    if (!instruction) {
        stopGame();

        document.getElementById('guide').style.display = '';
        if (!gameStarted) {
            document.getElementById('cover').style.display = 'none';
        }
        instruction = true;

    }
    else {
        if (!gameOver) {
            resumeGame();
        }
        document.getElementById('guide').style.display = 'none';
        if (!gameStarted) {
            document.getElementById('cover').style.display = '';

        }
        instruction = false;

    }



}


