class DrawableObjects{
    x = 120;
    y = 200;
    height = 150;
    width = 100;
    imageCache = {};
    currentImg = 0;
    img;

    drawBorder(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();

        }
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

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

    }

    

}