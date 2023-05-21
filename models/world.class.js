class World {
    character = new Character();
    statusbar = new Statusbar();
    statusbarCoin = new StatusbarCoin();
    statusbarBottle = new StatusbarBottle();
    ThrowableObjects = [];
    level = level1;
    keyboard;
    camera_x = -100;
    thrown = 0;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.draw();
        this.keyboard = keyboard;
        this.setWorld();
        this.checkCollisions();
    }

    checkCollisions() {
        setInterval(() => {
            this.enemyCollision();
            this.coinCollision();
            this.bottleCollision();
            this.checkThrowObject();

        }, 200);
    }

    checkThrowObject() {
        if (this.keyboard.D && this.thrown !== 0) {
            let bottle = new ThrowableObjects(this.character.x + 50, this.character.y + 120);
            this.ThrowableObjects.push(bottle);
            this.character.loseBottle();
            this.statusbarBottle.setPercentage(this.character.bottles);
            this.thrown--;
        }

    }

    enemyCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                console.log('Collision with charackter', enemy)
                this.character.hit();
                this.statusbar.setPercentage(this.character.health);
                console.log(this.character.health);
            }
        });
    }

    coinCollision() {
        //   this.level.coins.forEach((coin) => {
        //       if (this.character.isColliding(coin)) {
        //           this.character.collect();
        //           this.statusbarCoin.setPercentage(this.character.coins);
        //           this.level.coins.splice(0,1);
        //       }
        //   });

        for (let i = 0; i < this.level.coins.length; i++) {
            const coin = this.level.coins[i];
            if (this.character.isColliding(coin)) {
                this.character.collect();
                this.statusbarCoin.setPercentage(this.character.coins);
                this.level.coins.splice(i, 1);

            }

        }
    }

    bottleCollision() {
        //     this.level.salsabottle.forEach((bottle) => {
        //         if (this.character.isColliding(bottle)) {
        //             this.character.collectBottle();
        //             this.statusbarBottle.setPercentage(this.character.bottles);
        //         }
        //     });

        for (let i = 0; i < this.level.salsabottle.length; i++) {
            const bottle = this.level.salsabottle[i];
            if (this.character.isColliding(bottle)) {
                this.character.collectBottle();
                this.statusbarBottle.setPercentage(this.character.bottles);
                this.level.salsabottle.splice(i, 1);
                if (this.thrown >= 4) {
                    this.thrown = 4;

                } else {
                    this.thrown++;
                }



            }
        }
    }


    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, 700, 400);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToMap(this.level.background);
        this.addToMap(this.character);
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.level.salsabottle);
        this.addObjectToMap(this.level.clouds);
        this.addObjectToMap(this.level.coins);
        this.addObjectToMap(this.ThrowableObjects);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusbar);
        this.addToMap(this.statusbarCoin);
        this.addToMap(this.statusbarBottle);
        this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);


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
            object.flipImage(this.ctx);
        }
        object.draw(this.ctx);
        object.drawBorder(this.ctx);
        if (object.otherdirection) {
            object.flipImageBack(this.ctx);

        }
    }


}