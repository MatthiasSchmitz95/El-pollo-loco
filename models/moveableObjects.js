class MoveableObject {
    x = 120;
    y = 200;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImg = 0;
    speed = 0.15;
    otherdirection = false;
    speedY = 0;
    acceleration = 2.5;
    lasthit=0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY == 20) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;

            }
        }, 1000 / 25);

    }

    isAboveGround() {
        return this.y < 180;
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;

        });

    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;

    }

    moveLeft() {
        this.x -= this.speed;
       

    }

    moveRight() {
        this.x += this.speed;
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

    }

    hit(){
        this.health -= 1;
        if (this.health < 0) {
            this.health = 0;  
        } else{
            this.lasthit = new Date().getTime();
        }

    }

    isHurt(){
        let timepassed = new Date() - this.lasthit;
        timepassed = timepassed /1000;
        return timepassed <1;
    }

    isDead(){
        return this.health == 0;
    }

    flipImage(ctx){
        ctx.save();
        ctx.translate(this.width, 0);
        ctx.scale(-1, 1);
        this.x = this.x * -1;
    }

    flipImageBack(ctx){
        ctx.restore();
        this.x = this.x * -1;
    }

    drawBorder(ctx){
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
                
        }
    }

    playAnimation(images) {
        let i = this.currentImg % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImg++;
    }

    jump(){
        this.speedY=20;
    }

    isColliding(object){
        return this.x + this.width > object.x &&
        this.y + this.height > object.y && 
        this.x < object.x && 
        this.y < object.y + object.height
    }
}