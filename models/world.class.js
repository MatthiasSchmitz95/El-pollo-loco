class World {
    character = [new Character(180)]
    enemies = [new Chicken(), new Chicken(), new Chicken()];
    clouds = [new Clouds];
    background = [
        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('../img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('../img/5_background/layers/1_first_layer/1.png', 0)
    ];
    ctx;
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.draw();


    }

    draw() {
        this.ctx.clearRect(0, 0, 700, 400);
        this.addObjectToMap(this.background);
        this.addObjectToMap(this.character);
        this.addObjectToMap(this.enemies);
        this.addObjectToMap(this.clouds);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });


    };

    addObjectToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);

        });
    }

    addToMap(object) {
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);


    }
}