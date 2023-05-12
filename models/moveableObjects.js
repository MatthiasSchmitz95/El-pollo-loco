class MoveableObject {
    x = 120;
    y = 200;
    img;
    height = 150;
    width = 100;
    imageCache = {};

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

    }

}