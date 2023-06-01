/**
 * Represents a status bar for bottles in the game.
 * @extends DrawableObjects
 */
 class StatusbarBottle extends DrawableObjects {
    /**
     * The x-coordinate of the status bar.
     * @type {number}
     */
    x = 50;

    /**
     * The y-coordinate of the status bar.
     * @type {number}
     */
    y = 70;

    /**
     * The height of the status bar.
     * @type {number}
     */
    height = 50;

    /**
     * The width of the status bar.
     * @type {number}
     */
    width = 200;

    /**
     * The paths to the images of the status bar bottles.
     * @type {string[]}
     */
    IMAGES_BOTTLES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png'
    ];

    /**
     * The current percentage of the bottle status.
     * @type {number}
     */
    percentageBottle = 0;

    /**
     * Creates a status bar for bottles object.
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES_BOTTLES);
        this.setPercentage(0);
    }

    /**
     * Sets the percentage of the bottle status and updates the image.
     * @param {number} percentageBottle - The percentage of the bottle status.
     */
    setPercentage(percentageBottle) {
        this.percentageBottle = percentageBottle;
        let path = this.IMAGES_BOTTLES[this.imgIndexof()];
        this.img = this.imageCache[path];
    }

    /**
     * Returns the index of the image based on the current percentage of the bottle status.
     * @returns {number} - The index of the image.
     */
    imgIndexof() {
        if (this.percentageBottle === 100) {
            return 5;
        } else if (this.percentageBottle === 80) {
            return 4;
        } else if (this.percentageBottle === 60) {
            return 3;
        } else if (this.percentageBottle === 40) {
            return 2;
        } else if (this.percentageBottle === 20) {
            return 1;
        } else if (this.percentageBottle === 0) {
            return 0;
        }
    }
}
