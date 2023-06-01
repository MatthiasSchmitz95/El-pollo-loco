/**
 * Represents a moveable object in the game.
 * @extends DrawableObjects
 */
 class MoveableObject extends DrawableObjects {
    /**
     * The speed of the moveable object.
     * @type {number}
     */
    speed = 0.15;

    /**
     * Indicates if the object is moving in the other direction.
     * @type {boolean}
     */
    otherDirection = false;

    /**
     * The vertical speed of the moveable object.
     * @type {number}
     */
    speedY = 0;

    /**
     * The acceleration of the moveable object.
     * @type {number}
     */
    acceleration = 2.5;

    /**
     * The timestamp of the last hit.
     * @type {number}
     */
    lasthit = 0;

    /**
     * The offset values for collision detection.
     * @type {object}
     */
    offset = {
        top: 100,
        bottom: 80,
        left: 50,
        right: 50
    }

    /**
     * Applies gravity to the moveable object.
     */
    applyGravity() {
        setStoppableInterval(() => {
            if (this.isAboveGround() || this.speedY === 30) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    /**
     * Checks if the moveable object is above the ground.
     * @returns {boolean} - True if the object is above the ground, false otherwise.
     */
    isAboveGround() {
        if (this instanceof ThrowableObjects) {
            return true;
        } else {
            return this.y < 180;
        }
    }

    /**
     * Moves the object to the left.
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * Moves the object to the right.
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * Hits the object, reducing its health.
     */
    hit() {
        this.health -= 20;
        if (this.health < 0) {
            this.health = 0;
        } else {
            this.lasthit = new Date().getTime();
        }
    }

    /**
     * Collects a coin, increasing the coin count.
     */
    collect() {
        collect_sound.play();
        this.coins += 20;
        if (this.coins > 100) {
            this.coins = 100;
        }
    }

    /**
     * Collects a bottle, increasing the bottle count.
     */
    collectBottle() {
        this.bottles += 20;
        if (this.bottles > 100) {
            this.bottles = 100;
        }
    }

    /**
     * Loses a bottle, decreasing the bottle count.
     */
    loseBottle() {
        this.bottles -= 20;
        if (this.bottles === 0) {
            this.bottles = 0;
        }
    }

    /**
     * Checks if the object is currently hurt.
     * @returns {boolean} - True if the object is hurt, false otherwise.
     */
    isHurt() {
        let timepassed = new Date() - this.lasthit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    /**
     * Checks if the object is dead (health equals zero).
     * @returns {boolean} - True if the object is dead, false otherwise.
     */
    isDead() {
        return this.health === 0;
    }

    /**
     * Decreases the health of the object when hit by an enemy.
     */
    enemyHit() {
        this.health -= 1;
    }

    /**
     * Flips the image of the object horizontally.
     * @param {CanvasRenderingContext2D} ctx - The rendering context.
     */
    flipImage(ctx) {
        ctx.save();
        ctx.translate(this.width, 0);
        ctx.scale(-1, 1);
        this.x = this.x * -1;
    }

    /**
     * Reverts the image of the object back to its original orientation.
     * @param {CanvasRenderingContext2D} ctx - The rendering context.
     */
    flipImageBack(ctx) {
        ctx.restore();
        this.x = this.x * -1;
    }

    /**
     * Plays an animation for the object using a set of images.
     * @param {string[]} images - The paths to the images for the animation.
     */
    playAnimation(images) {
        let i = this.currentImg % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImg++;
    }

    /**
     * Makes the object jump.
     */
    jump() {
        this.speedY = 30;
    }

    /**
     * Checks if the object is colliding with another object.
     * @param {object} object - The other object to check collision against.
     * @returns {boolean} - True if the objects are colliding, false otherwise.
     */
    isColliding(object) {
        return (
            this.x + this.width - this.offset.right > object.x + object.offset.left &&
            this.y + this.height - this.offset.bottom > object.y + object.offset.top &&
            this.x + this.offset.left < object.x + object.width - object.offset.right &&
            this.y + this.offset.top < object.y + object.height - object.offset.bottom
        );
    }
}
