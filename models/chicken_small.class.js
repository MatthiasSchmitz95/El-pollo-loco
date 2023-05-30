class ChickenSmall extends MoveableObject {
    y = 365;
    width = 70;
    height = 70;
    health =1;
    hurt =false;

    offset = {
        top: 65,
        left: 60,
        right: 60,
        bottom: 60  
    };

    IMAGES_WALKINg = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ]

    IMAGES_DEAD=[
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png',

    ];


    constructor(x) {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKINg);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x + Math.random() * 500;
        this.animate();
    }

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
    
        }, 200)

    }



}