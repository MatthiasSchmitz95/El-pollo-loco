class ThrowableObjects extends MoveableObject {
    speedX = 5;
    speedY = 5;
    world;
    otherdirection;

    IMAGES_ROTATE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ]
    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGES_ROTATE);
        this.x = 100;
        this.y = 100;
        this.height = 60;
        this.width = 50;
        this.throw(x, y);
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_ROTATE);
        }, 1000 / 20);
    }



    throw(x, y) {
        this.animate();
        this.speedY = 30;
        this.x = x;
        this.y = y;
        this.applyGravity();

        if (this.otherdirection) {
            setInterval(() => {
                this.x -= 10;
    
            }, 25);
            
            
        }else{
            setInterval(() => {
                this.x += 10;
    
            }, 25);
        }

    }



}