class MoveableObject extends DrawableObjects {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    lasthit = 0;

    offset = {
        top: 100,
        bottom: 80,
        left: 50,
        right: 50
    }


    applyGravity() {
        setStoppableInterval(() => {
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
        this.x -= 200;
        if (this.health < 0) {
            this.health = 0;
        } else {
            this.lasthit = new Date().getTime();
        }

    }

    collect() {
        collect_sound.play();
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

    enemyHit() {
        this.health -= 1;
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

    isCollidingOld(object) {
        return (
            this.x + this.width - this.offset.right > object.x + object.offset.left &&
            this.y + this.height - this.offset.bottom > object.y + object.offset.top &&
            this.x + this.offset.left < object.x + object.width - object.offset.right &&
            this.y + this.offset.top < object.y + object.height - object.offset.bottom
          );
        }
}