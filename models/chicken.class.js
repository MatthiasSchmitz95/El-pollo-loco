class Chicken extends MoveableObject {
    y = 335;
    width = 90;
    height = 90;
    health =1;
    hurt =false;

    offset = {
        top: 2,
        left: 2,
        right: 2,
        bottom: 2  
    };


    IMAGES_WALKINg = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'


    ];

    IMAGES_DEAD=[
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',

    ];


    constructor(x) {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKINg);
        this.loadImages(this.IMAGES_DEAD);

        this.x = x + Math.random() * 500;
        this.animate();
    };

    animate() {
        setStoppableInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setStoppableInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.speed =0;
            }else
            this.playAnimation(this.IMAGES_WALKINg);

        }, 200);

    }



}