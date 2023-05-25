class ThrowableObjects extends MoveableObject {
    speedX = 5;
    speedY = 5;
    IMAGES_ROTATE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];


    IMAGES_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];


    constructor(x, y, otherDirection) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGES_ROTATE);
        this.loadImages(this.IMAGES_SPLASH);
        this.x = 100;
        this.y = 100;
        this.height = 60;
        this.width = 50;
        this.throw(x, y);
        this.otherDirection = otherDirection;
    }


    animate() {
        setInterval(() => {
            if (this.hurt == true) {
                this.playAnimation(this.IMAGES_SPLASH);

            }
            this.playAnimation(this.IMAGES_ROTATE);
        }, 1000 / 20);
    }



    throw(x, y) {
        this.animate();
        this.speedY = 30;
        this.x = x;
        this.y = y;
        this.applyGravity();


        setInterval(() => {
            if (this.otherDirection) {
                this.x -= 10;
            } else {
                this.x += 10;}
            }, 25);





    }

}

