class ChickenSmall extends MoveableObject {
    y = 365;
    width = 70;
    height = 70;


    IMAGES_WALKINg = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ]

    IMAGES_DEAD=[
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];


    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKINg);
        this.loadImage(this/this.IMAGES_DEAD);

        this.x = 600 + Math.random() * 500;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            
                this.playAnimation(this.IMAGES_WALKINg);
            

            

        }, 200)

    }



}