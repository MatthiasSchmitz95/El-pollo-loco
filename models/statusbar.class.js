/**
 * Represents a status bar in the game.
 * @extends DrawableObjects
 */
 class Statusbar extends DrawableObjects {
    /**
     * The x-coordinate of the status bar.
     * @type {number}
     */
    x = 50;

    /**
     * The y-coordinate of the status bar.
     * @type {number}
     */
    y = -10;

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
     * The paths to the images of the health status bar.
     * @type {string[]}
     */
    IMAGES_HEALTH = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png'
    ];

    /**
     * The current percentage of the health status.
     * @type {number}
     */
    percentage = 100;

    /**
     * Creates a status bar object.
     */
    constructor() {
        super().loadImage('img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png');
        this.loadImages(this.IMAGES_HEALTH);
        this.setPercentage(100);
    }

    /**
     * Sets the percentage of the health status and updates the image.
     * @param {number} percentage - The percentage of the health status.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HEALTH[this.imgIndexof()];
        this.img = this.imageCache[path];
    }

    /**
     * Returns the index of the image based on the current percentage of the health status.
     * @returns {number} - The index of the image.
     */
    imgIndexof() {
        if (this.percentage === 100) {
            return 5;
        } else if (this.percentage === 80) {
            return 4;
        } else if (this.percentage === 60) {
            return 3;
        } else if (this.percentage === 40) {
            return 2;
        } else if (this.percentage === 20) {
            return 1;
        } else if (this.percentage === 0) {
            return 0;
        }
    }
}
