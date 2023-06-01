/**
 * Represents a throwable object in the game.
 * @extends MoveableObject
 */
 class ThrowableObjects extends MoveableObject {
    /**
     * The horizontal speed of the throwable object.
     * @type {number}
     */
    speedX = 5;

    /**
     * The vertical speed of the throwable object.
     * @type {number}
     */
    speedY = 5;

    /**
     * Indicates if the throwable object has exploded.
     * @type {boolean}
     */
    explosion = false;

    /**
     * The offset values for collision detection.
     * @type {object}
     */
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

    /**
     * The paths to the images of the rotating throwable object.
     * @type {string[]}
     */
    IMAGES_ROTATE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    /**
     * The paths to the images of the splashing throwable object.
     * @type {string[]}
     */
    IMAGES_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];

    /**
     * Creates a throwable object.
     * @param {number} x - The x-coordinate of the throwable object.
     * @param {number} y - The y-coordinate of the throwable object.
     * @param {boolean} otherDirection - Indicates if the throwable object should move in the other direction.
     */
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

    /**
     * Animates the throwable object by playing the rotation or splash animation.
     */
    animate() {
        setStoppableInterval(() => {
            if (this.explosion) {
                this.playAnimation(this.IMAGES_SPLASH);
            } else {
                this.playAnimation(this.IMAGES_ROTATE);
            }
        }, 1000 / 20);
    }

    /**
     * Throws the throwable object at the specified coordinates.
     * @param {number} x - The x-coordinate of the target position.
     * @param {number} y - The y-coordinate of the target position.
     */
    throw(x, y) {
        this.animate();
        this.speedY = 30;
        this.x = x;
        this.y = y;
        this.applyGravity();
        setStoppableInterval(() => {
            if (this.otherDirection) {
                this.x -= 10;
            } else {
                this.x += 10;
            }
        }, 25);
    }

    /**
     * Triggers an explosion effect for the throwable object.
     */
    explosion() {
        this.explosion = true;
        setTimeout(() => {
            this.explosion = false;
        }, 1000);
    }
}
