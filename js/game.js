let canvas;
let world;
let keyboard = new Keyboard();
let IntervallIds = [];
let fullscreencheck = false;
let mute = false;
let instruction = false;
let gameStarted = false;
let gameOver = false;
let remotePanel = true;


let walking_sound = new Audio('audio/walking.mp3');
let death_sound = new Audio('audio/death-sound.mp3');
let hurt_sound = new Audio('audio/hurt-sound.mp3');
let jump_sound = new Audio('audio/jump-sound.mp3');
let chicken_sound = new Audio('audio/chicken-sound.mp3');
let background_sound = new Audio('audio/background-sound.mp3');
let collect_sound = new Audio('audio/collect-coin.mp3');


window.addEventListener("DOMContentLoaded", function() {
    var rotateMessage = document.getElementById("rotate-message");
  
    function checkRotation() {
      if (window.innerWidth < 1080 && (window.orientation === undefined || window.orientation === 0)) {
        rotateMessage.style.display = "block";
      } else {
        rotateMessage.style.display = "none";
      }
    }
  
    // Check rotation on page load
    checkRotation();
  
    // Check rotation on window resize
    window.addEventListener("resize", checkRotation);
  });
  
  
  
  
  
  
  


function playBackgroundSound() {
    background_sound.loop = true;
    background_sound.play();
}


async function init() {
    await startLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    removeCover();
    gameStarted = true;

}

function togglePanel() {
    if (remotePanel) {
        document.getElementById('remote-panel').style.opacity = '0';
        document.getElementById('eye').style.display = 'none';
        document.getElementById('eye-hidden').style.display = '';
        remotePanel = false;

    } else {
        document.getElementById('remote-panel').style.opacity = '1';
        document.getElementById('eye').style.display = '';
        document.getElementById('eye-hidden').style.display = 'none';
        remotePanel = true;
    }

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


