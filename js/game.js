let canvas;
let world;
let keyboard =new Keyboard();


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);



    console.log('Mein Character', world.character)

    window.addEventListener('keydown', (e) =>{
        console.log(e);
        let key = e['code'];
        if (key ==="Space") {
            console.log("Space");
            SPACE=true;
            
        }
        if (key ==="ArrowRight") {
            console.log("Space");
            RIGHT=true;
            
        }

        if (key ==="ArrowLeft") {
            console.log("Space");
            LEFT=true;
            
        }

        if (key ==="ArrowDown") {
            console.log("Space");
            DOWN=true;
            
        }

        if (key ==="ArrowUp") {
            console.log("Space");
            UP=true;
            
        }


    })

}