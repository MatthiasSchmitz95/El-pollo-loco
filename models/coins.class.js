/**
 * Represents a coin that extends the MoveableObject class.
 * @extends MoveableObject
 */
 class Coin extends MoveableObject {
    /**
     * The y-coordinate of the coin.
     * @type {number}
     * @default 310
     */
    y = 310;

    /**
     * The x-coordinate of the coin.
     * @type {number}
     * @default 200
     */
    x = 200;

    /**
     * The offset values for collision detection.
     * @type {object}
     * @property {number} top - The top offset.
     * @property {number} bottom - The bottom offset.
     * @property {number} left - The left offset.
     * @property {number} right - The right offset.
     * @default { top: 20, bottom: 30, left: 40, right: 40 }
     */
    offset = {
        top: 20,
        bottom: 30,
        left: 40,
        right: 40
    };

    /**
     * An array of image paths for spinning animations.
     * @type {string[]}
     */
    IMAGES_SPIN = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];

    /**
     * Constructs a new Coin instance.
     * @param {number} x - The initial x-coordinate of the coin.
     * @param {number} y - The initial y-coordinate of the coin.
     */
    constructor(x, y) {
        super().loadImage('img/8_coin/coin_1.png');
        this.loadImages(this.IMAGES_SPIN);
        this.x = x + Math.random() * 500;
        this.y = y + Math.random() * 200;
        this.animate();
    }

    /**
     * Animates the coin's spinning.
     */
    animate() {
        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_SPIN);
        }, 500);
    }
}
