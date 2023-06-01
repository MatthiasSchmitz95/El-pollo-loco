/**
 * Class representing a Chicken enemy object.
 * Extends MoveableObject class.
 */
 class Chicken extends MoveableObject {
    y = 335;
    width = 90;
    height = 90;
    health = 1;
    hurt = false;

    offset = {
        top: 2,
        left: 2,
        right: 2,
        bottom: 2  
    };

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
    ];

    /**
     * Creates an instance of Chicken.
     * @param {number} x - The initial x-coordinate of the Chicken.
     */
    constructor(x) {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);

        this.x = x + Math.random() * 500;
        this.animate();
    }

    /**
     * Animates the Chicken's movement and appearance.
     */
    animate() {
        setStoppableInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setStoppableInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.speed = 0;
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    }
}
