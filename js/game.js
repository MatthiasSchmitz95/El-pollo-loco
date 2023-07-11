/**
 * The canvas element used for rendering the game.
 * @type {HTMLCanvasElement}
 */
let canvas;

/**
 * The game world object.
 * @type {World}
 */
let world;

/**
 * The keyboard input handler.
 * @type {Keyboard}
 */
let keyboard = new Keyboard();

/**
 * Array to store interval IDs for stoppable intervals.
 * @type {Array}
 */
let IntervallIds = [];

/**
 * Flag indicating whether the game is in fullscreen mode.
 * @type {boolean}
 */
let fullscreencheck = false;

/**
 * Flag indicating whether the sound is muted.
 * @type {boolean}
 */
let mute = false;

/**
 * Flag indicating whether the instructions are displayed.
 * @type {boolean}
 */
let instruction = false;

/**
 * Flag indicating whether the game has started.
 * @type {boolean}
 */
let gameStarted = false;

/**
 * Flag indicating whether the game is over.
 * @type {boolean}
 */
let gameOver = false;

/**
 * Flag indicating whether the remote panel is visible.
 * @type {boolean}
 */
let remotePanel = true;

/**
 * Audio elements for different sounds.
 * @type {HTMLAudioElement}
 */
let walking_sound = new Audio('audio/walking.mp3');
let death_sound = new Audio('audio/death-sound.mp3');
let hurt_sound = new Audio('audio/hurt-sound.mp3');
let jump_sound = new Audio('audio/jump-sound.mp3');
let chicken_sound = new Audio('audio/chicken-sound.mp3');
let background_sound = new Audio('audio/background-sound.mp3');
let collect_sound = new Audio('audio/collect-coin.mp3');

/**
 * Event listener to check rotation and display a message if the device is in portrait orientation.
 */
window.addEventListener("DOMContentLoaded", function () {
    /**
     * The element displaying the rotation message.
     * @type {HTMLElement}
     */
    var rotateMessage = document.getElementById("rotate-message");

    /**
     * Checks the device rotation and displays the rotation message if necessary.
     */
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

/**
 * Plays the background sound on loop.
 */
function playBackgroundSound() {
    background_sound.loop = true;
    background_sound.play();
}

/**
 * Initializes the game.
 * @returns {Promise<void>}
 */
async function init() {
    await startLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    removeCover();
    gameStarted = true;
}

/**
 * Toggles the visibility of the remote panel.
 */
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

/**
 * Removes the cover and starts playing the background sound.
 */
function removeCover() {
    document.getElementById('cover').style.display = 'none';
    playBackgroundSound();
}

/**
 * Sets a stoppable interval that can be later stopped.
 * @param {Function} fn - The function to be executed at the specified interval.
 * @param {number} time - The interval time in milliseconds.
 */
function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    IntervallIds.push({ id, time, fn });
}
let IntervallIds2 = [];
/**
 * Resumes the game by restarting the stoppable intervals.
 */
 function resumeGame() {
    IntervallIds2.forEach(intervall => {
        let id = setInterval(intervall.fn, intervall.time);
        IntervallIds.push({ id, time: intervall.time, fn: intervall.fn });
    });
    IntervallIds2 = [];
}

/**
 * Stops all the stoppable intervals.
 */
function stopGame() {
    IntervallIds.forEach(intervall => clearInterval(intervall.id));
    IntervallIds2 = IntervallIds.slice();
    IntervallIds = [];
}

/**
 * Ends the game and displays the game over container.
 */
function endGame() {
    stopGame();
    gameOver = true;
    document.getElementById('game-over-container').style.display = '';
}

/**
 * Restarts the game by calling the initialization function and hiding the game over container.
 */
function playAgain() {
    init();
    document.getElementById('game-over-container').style.display = 'none';
}

/**
 * Takes the player back to the main menu by hiding the game over container.
 */
function backToMenu() {
    document.getElementById('game-over-container').style.display = 'none';
}

/**
 * Toggles fullscreen mode for the game.
 */
function fullscreen() {
    let fullscreen = document.getElementById('fullscreen');
    if (!fullscreencheck) {
        enterFullscreen(fullscreen);
    } else {
        exitFullscreen();
    }
}

/**
 * Requests fullscreen mode for the specified element.
 * @param {HTMLElement} element - The element to be displayed in fullscreen.
 */
function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
    fullscreencheck = true;
}

/**
 * Exits fullscreen mode.
 */
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
    fullscreencheck = false;
}

/**
 * Toggles the mute state of the audio elements and updates the speaker icon.
 */
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

/**
 * Toggles the mute state of the audio elements.
 * @param {boolean} stance - The mute state to set for the audio elements.
 */
function soundMuteToggle(stance) {
    walking_sound.muted = stance;
    death_sound.muted = stance;
    hurt_sound.muted = stance;
    jump_sound.muted = stance;
    chicken_sound.muted = stance;
    background_sound.muted = stance;
    collect_sound.muted = stance;
}

/**
 * Toggles the visibility of the instructions.
 */
function showIntsructions() {
    if (!instruction) {
        stopGame();
        document.getElementById('guide').style.display = '';
        if (!gameStarted) {
            document.getElementById('cover').style.display = 'none';
        }
        instruction = true;
    } else {
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
