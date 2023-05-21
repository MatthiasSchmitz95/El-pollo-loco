class MoveableObject extends DrawableObjects {
    speed = 0.15;
    otherdirection = false;
    speedY = 0;
    acceleration = 2.5;
    lasthit = 0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY == 30) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;

            }
        }, 1000 / 25);

    }

    isAboveGround() {
        if (this instanceof ThrowableObjects) {
            return true;

        } else
            return this.y < 180;
    }


    moveLeft() {
        this.x -= this.speed;


    }

    moveRight() {
        this.x += this.speed;
    }



    hit() {
        this.health -= 20;
        if (this.health < 0) {
            this.health = 0;
        } else {
            this.lasthit = new Date().getTime();
        }

    }

    collect() {
        this.coins += 20;
        if (this.coins > 100) {
            this.coins = 100;
        }
    }

    collectBottle() {
        this.bottles += 20;
        if (this.bottles > 100) {
            this.bottles = 100;
        }
    }

    loseBottle() {
        this.bottles -= 20;
        if (this.bottles == 0) {
            this.bottles = 0;

        }
    }

    isHurt() {
        let timepassed = new Date() - this.lasthit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    isDead() {
        return this.health == 0;
    }

    flipImage(ctx) {
        ctx.save();
        ctx.translate(this.width, 0);
        ctx.scale(-1, 1);
        this.x = this.x * -1;
    }

    flipImageBack(ctx) {
        ctx.restore();
        this.x = this.x * -1;
    }


    playAnimation(images) {
        let i = this.currentImg % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImg++;
    }

    jump() {
        this.speedY = 30;
    }

    isColliding(object) {
        return this.x + this.width > object.x &&
            this.y + this.height > object.y &&
            this.x < object.x &&
            this.y < object.y + object.height
    }
}