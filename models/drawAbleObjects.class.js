/**
 * Represents a drawable object with basic drawing functionality.
 */
 class DrawableObjects {
    /**
     * The x-coordinate of the object.
     * @type {number}
     * @default 120
     */
    x = 120;

    /**
     * The y-coordinate of the object.
     * @type {number}
     * @default 200
     */
    y = 200;

    /**
     * The height of the object.
     * @type {number}
     * @default 150
     */
    height = 150;

    /**
     * The width of the object.
     * @type {number}
     * @default 100
     */
    width = 100;

    /**
     * The image cache to store loaded images.
     * @type {object}
     */
    imageCache = {};

    /**
     * The index of the current image.
     * @type {number}
     * @default 0
     */
    currentImg = 0;

    /**
     * The image object representing the object's image.
     * @type {Image}
     */
    img;

    /**
     * Draws the object's border.
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    drawBorder(ctx) {
        if (
            this instanceof Salsabottle ||
            this instanceof ThrowableObjects ||
            this instanceof Character ||
            this instanceof Chicken ||
            this instanceof Endboss ||
            this instanceof ChickenSmall
        ) {
            ctx.beginPath();
            ctx.rect(
                this.x + this.offset.left,
                this.y + this.offset.top,
                this.width - this.offset.left - this.offset.right,
                this.height - this.offset.top - this.offset.bottom
            );
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    /**
     * Loads multiple images into the image cache.
     * @param {string[]} arr - An array of image paths to load.
     */
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * Loads an image for the object.
     * @param {string} path - The path of the image to load.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Draws the object on the canvas.
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (e) {
            // Handle error
        }
    }
}
