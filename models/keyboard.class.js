/**
 * Represents the keyboard input handler.
 */
 class Keyboard {
    /**
     * Indicates if the left arrow key is pressed.
     * @type {boolean}
     * @default false
     */
    LEFT = false;

    /**
     * Indicates if the up arrow key is pressed.
     * @type {boolean}
     * @default false
     */
    UP = false;

    /**
     * Indicates if the right arrow key is pressed.
     * @type {boolean}
     * @default false
     */
    RIGHT = false;

    /**
     * Indicates if the down arrow key is pressed.
     * @type {boolean}
     * @default false
     */
    DOWN = false;

    /**
     * Indicates if the space bar key is pressed.
     * @type {boolean}
     * @default false
     */
    SPACE = false;

    /**
     * Indicates if the 'D' key is pressed.
     * @type {boolean}
     * @default false
     */
    D = false;

    /**
     * Creates a new instance of the Keyboard class.
     */
    constructor() {
        this.eventKeyboard();
        this.eventTouchpad();
    }

    /**
     * Handles keyboard events.
     */
    eventKeyboard() {
        window.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') {
                this.LEFT = true;
            }

            if (event.key === 'ArrowRight') {
                this.RIGHT = true;
            }

            if (event.key === 'ArrowDown') {
                this.DOWN = true;
            }

            if (event.key === ' ') {
                this.SPACE = true;
            }

            if (event.key === 'd') {
                this.D = true;
            }
        });

        window.addEventListener('keyup', (event) => {
            if (event.key === 'ArrowLeft') {
                this.LEFT = false;
            }

            if (event.key === 'ArrowRight') {
                this.RIGHT = false;
            }

            if (event.key === 'ArrowDown') {
                this.DOWN = false;
            }

            if (event.key === ' ') {
                this.SPACE = false;
            }

            if (event.key === 'd') {
                this.D = false;
            }
        });
    }

    /**
     * Handles touchpad events.
     */
    eventTouchpad() {
        setTimeout(() => {
            document.getElementById('LEFT-arrow').addEventListener('touchstart', (event) => {
                event.preventDefault();
                this.LEFT = true;
            });

            document.getElementById('LEFT-arrow').addEventListener('touchend', (event) => {
                event.preventDefault();
                this.LEFT = false;
            });

            document.getElementById('RIGHT-arrow').addEventListener('touchstart', (event) => {
                event.preventDefault();
                this.RIGHT = true;
            });

            document.getElementById('RIGHT-arrow').addEventListener('touchend', (event) => {
                event.preventDefault();
                this.RIGHT = false;
            });

            document.getElementById('jump').addEventListener('touchstart', (event) => {
                event.preventDefault();
                this.SPACE = true;
            });

            document.getElementById('jump').addEventListener('touchend', (event) => {
                event.preventDefault();
                this.SPACE = false;
            });

            document.getElementById('throw').addEventListener('touchstart', (event) => {
                event.preventDefault();
                this.D = true;
            });

            document.getElementById('throw').addEventListener('touchend', (event) => {
                event.preventDefault();
                this.D = false;
            });
        }, 500);
    }
}
