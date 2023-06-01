/**
 * Represents a status bar for the end boss in the game.
 * @extends DrawableObjects
 */
 class StatusbarEndboss extends DrawableObjects {
    /**
     * The x-coordinate of the status bar.
     * @type {number}
     */
    x = 50;

    /**
     * The y-coordinate of the status bar.
     * @type {number}
     */
    y = 15;

    /**
     * The width of the status bar.
     * @type {number}
     */
    width = 200;

    /**
     * The height of the status bar.
     * @type {number}
     */
    height = 80;

    /**
     * The paths to the images of the end boss health status bar.
     * @type {string[]}
     */
    IMAGES_HPENDBOSS = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png'
    ];

    /**
     * The current percentage of the end boss health status.
     * @type {number}
     */
    percentage = 35;

    /**
     * Creates a status bar for the end boss object.
     */
    constructor() {
        super().loadImage('img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png');
        this.loadImages(this.IMAGES_HPENDBOSS);
        this.setPercentage(35);
    }

    /**
     * Sets the percentage of the end boss health status and updates the image.
     * @param {number} percentage - The percentage of the end boss health status.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HPENDBOSS[this.imgIndexof()];
        this.img = this.imageCache[path];
    }

    /**
     * Returns the index of the image based on the current percentage of the end boss health status.
     * @returns {number} - The index of the image.
     */
    imgIndexof() {
        if (this.percentage === 6) {
            return 5;
        } else if (this.percentage === 5) {
            return 4;
        } else if (this.percentage === 4) {
            return 3;
        } else if (this.percentage === 3) {
            return 2;
        } else if (this.percentage <= 2 && this.percentage > 0) {
            return 1;
        } else if (this.percentage === 0) {
            return 0;
        }
    }
}
