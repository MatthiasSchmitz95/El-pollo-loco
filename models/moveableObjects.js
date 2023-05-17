class MoveableObject {
    x = 120;
    y = 200;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImg=0;
    speed = 0.15;
    otherdirection =false;

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
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);

    }

    moveRight(){
        this.x +=2;
    }

}