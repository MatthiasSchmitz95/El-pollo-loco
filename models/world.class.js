class World {
    character = new Character(180);
    level = level1;

    keyboard;
    camera_x = -100;
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.draw();
        this.keyboard = keyboard;
        this.setWorld();


    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, 700, 400);
        this.ctx.translate(this.camera_x,0);
        this.addObjectToMap(this.level.background);
        this.addToMap(this.character);
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.level.clouds);
        this.ctx.translate(-this.camera_x,0);


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
        if (object.otherdirection) {
            this.ctx.save();
            this.ctx.translate(object.width, 0);
            this.ctx.scale(-1, 1);
            object.x = object.x * -1;
        }
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
        if (object.otherdirection) {
            this.ctx.restore();
            object.x = object.x * -1;
            
        }


    }
}