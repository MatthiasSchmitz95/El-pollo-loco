/**
 * Represents a salsa bottle object in the game.
 * @extends DrawableObjects
 */
 class Salsabottle extends DrawableObjects {
    /**
     * The x-coordinate of the salsa bottle.
     * @type {number}
     */
    x = 100;

    /**
     * The y-coordinate of the salsa bottle.
     * @type {number}
     */
    y = 360;

    /**
     * The height of the salsa bottle.
     * @type {number}
     */
    height = 70;

    /**
     * The width of the salsa bottle.
     * @type {number}
     */
    width = 50;

    /**
     * The offset values for collision detection.
     * @type {object}
     */
    offset = {
        top: 0,
        left: 25,
        right: 25,
        bottom: 0
    };

    /**
     * The paths to the images of the salsa bottle.
     * @type {string[]}
     */
    IMAGE_SALSABOTTLE = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ];

    /**
     * Creates a salsa bottle object.
     * @param {number} x - The x-coordinate of the salsa bottle.
     */
    constructor(x) {
        super();
        this.loadImages(this.IMAGE_SALSABOTTLE);
        this.setImage();
        this.x = x + Math.random() * 500;
    }

    /**
     * Sets the image of the salsa bottle.
     */
    setImage() {
        let path = this.IMAGE_SALSABOTTLE[this.randomizer()];
        this.img = this.imageCache[path];
    }

    /**
     * Generates a random index for selecting an image.
     * @returns {number} - The random index.
     */
    randomizer() {
        return Math.floor(Math.random() * 2);
    }
}
