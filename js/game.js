let canvas;
let world;
let keyboard =new Keyboard();


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    



    console.log('Mein Character', world.character)

    window.addEventListener('keydown', (e) =>{
        console.log(e);
        let key = e['code'];
        if (key ==="Space") {
            console.log("Space");
            keyboard.SPACE=true;
            
        }
        if (key ==="ArrowRight") {
            console.log(keyboard);
            keyboard.RIGHT=true;
            
        }

        if (key ==="ArrowLeft") {
            console.log(keyboard);
            keyboard.LEFT=true;
            
        }

        if (key ==="ArrowDown") {
            console.log(keyboard);
            keyboard.DOWN=true;
            
        }

        if (key ==="ArrowUp") {
            console.log(keyboard);
            keyboard.UP=true;
            
        }


    })

    window.addEventListener('keyup', (e) =>{
        console.log(e);
        let key = e['code'];
        if (key ==="Space") {
            console.log("Space");
            keyboard.SPACE=false;
            
        }
        if (key ==="ArrowRight") {
            console.log(keyboard);
            keyboard.RIGHT=false;
            
        }
    
        if (key ==="ArrowLeft") {
            console.log(keyboard);
            keyboard.LEFT=false;
            
        }
    
        if (key ==="ArrowDown") {
            console.log(keyboard);
            keyboard.DOWN=false;
            
        }
    
        if (key ==="ArrowUp") {
            console.log(keyboard);
            keyboard.UP=false;
            
        }
    })

}
