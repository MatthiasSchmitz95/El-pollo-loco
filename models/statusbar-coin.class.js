/**
 * Represents a status bar for coins in the game.
 * @extends DrawableObjects
 */
 class StatusbarCoin extends DrawableObjects {
    /**
     * The x-coordinate of the status bar.
     * @type {number}
     */
    x = 50;

    /**
     * The y-coordinate of the status bar.
     * @type {number}
     */
    y = 30;

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
     * The paths to the images of the status bar coins.
     * @type {string[]}
     */
    IMAGES_COINS = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png'
    ];

    /**
     * The current percentage of the coin status.
     * @type {number}
     */
    percentageCoin = 0;

    /**
     * Creates a status bar for coins object.
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES_COINS);
        this.setPercentage(0);
    }

    /**
     * Sets the percentage of the coin status and updates the image.
     * @param {number} percentageCoin - The percentage of the coin status.
     */
    setPercentage(percentageCoin) {
        this.percentageCoin = percentageCoin;
        let path = this.IMAGES_COINS[this.imgIndexof()];
        this.img = this.imageCache[path];
    }

    /**
     * Returns the index of the image based on the current percentage of the coin status.
     * @returns {number} - The index of the image.
     */
    imgIndexof() {
        if (this.percentageCoin === 100) {
            return 5;
        } else if (this.percentageCoin === 80) {
            return 4;
        } else if (this.percentageCoin === 60) {
            return 3;
        } else if (this.percentageCoin === 40) {
            return 2;
        } else if (this.percentageCoin === 20) {
            return 1;
        } else if (this.percentageCoin === 0) {
            return 0;
        }
    }
}
