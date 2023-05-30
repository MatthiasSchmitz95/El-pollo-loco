class Keyboard {
    LEFT = false;
    UP = false;
    RIGHT = false;
    DOWN = false;
    SPACE = false;
    D = false;

    constructor(){
        this.eventKeyboardBtns();
        this.eventTouchpadBtns();

    }



    eventKeyboardBtns() {
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
    
            if (event.key === 'KeyD') {
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
    
            if (event.key === 'KeyD') {
                this.D = false;
            }
        });
    }
    
    eventTouchpadBtns() {
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
