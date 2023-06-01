/**
 * Represents a small chicken enemy that extends the MoveableObject class.
 */
 class ChickenSmall extends MoveableObject {
    /**
     * The y-coordinate of the chicken.
     * @type {number}
     */
    y = 365;

    /**
     * The width of the chicken.
     * @type {number}
     */
    width = 70;

    /**
     * The height of the chicken.
     * @type {number}
     */
    height = 70;

    /**
     * The health of the chicken.
     * @type {number}
     */
    health = 1;

    /**
     * Indicates whether the chicken is hurt.
     * @type {boolean}
     */
    hurt = false;

    /**
     * The offset values for collision detection.
     * @type {object}
     */
    offset = {
        top: 2,
        left: 2,
        right: 2,
        bottom: 2
    };

    /**
     * An array of image paths for walking animations.
     * @type {string[]}
     */
    IMAGES_WALKINg = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];

    /**
     * An array of image paths for dead animations.
     * @type {string[]}
     */
    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];

    /**
     * Constructs a new ChickenSmall instance.
     * @param {number} x - The initial x-coordinate of the chicken.
     */
    constructor(x) {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKINg);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x + Math.random() * 500;
        this.animate();
    }

    /**
     * Animates the chicken's movements and actions.
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
                this.playAnimation(this.IMAGES_WALKINg);
            }
        }, 200);
    }
}
