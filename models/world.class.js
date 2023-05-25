class World {
    character = new Character();
    statusbar = new Statusbar();
    statusbarCoin = new StatusbarCoin();
    statusbarBottle = new StatusbarBottle();
    statusbarEndboss = new StatusbarEndboss();
    throwableObjects = [];
    level = level1;
    keyboard;
    camera_x = -100;
    thrown = 0;
    justThrown = false;


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
            this.checkBottle();

        }, 25);
    }

    checkThrowObject() {
        if (this.keyboard.D && this.thrown !== 0 && this.justThrown == false) {
            let bottle = new ThrowableObjects(this.character.x + 50, this.character.y + 120);
            this.throwableObjects.push(bottle);
            this.character.loseBottle();
            this.statusbarBottle.setPercentage(this.character.bottles);
            this.thrown--;
            this.justThrown = true;
            setTimeout(() => {
                this.justThrown = false;
            }, 500)

        }

    }

    removeBody(index) {
        setTimeout(() => {
            if (this.level.enemies[index].health == 0) {
                this.level.enemies.splice(index, 1);
            }
   

        }, 3000)

    }

    enemyCollision() {
        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isColliding(enemy) && this.character.isAboveGround()) {
                if (enemy.health >0) {
                    enemy.health--;          
                } 
                this.removeBody(index);
            } else

                if (this.character.isColliding(enemy) && !this.character.isAboveGround() && !enemy.isDead()) {
                    console.log('Collision with charackter', enemy)
                    this.character.hit();
                    this.statusbar.setPercentage(this.character.health);
                    console.log(this.character.health);
                }
        });
    }

    coinCollision() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.character.collect();
                this.statusbarCoin.setPercentage(this.character.coins);
                this.level.coins.splice(index, 1);
            }
        });

    }

    bottleCollision() {
        this.level.salsabottle.forEach((bottle, index) => {
            if (this.character.isColliding(bottle) && this.thrown < 5) {
                this.character.collectBottle();
                this.statusbarBottle.setPercentage(this.character.bottles);
                this.level.salsabottle.splice(index, 1);
                if (this.thrown >= 5) {
                    this.thrown = 5;
                } else {
                    this.thrown++;
                }
            }
        });
    }

    hitEnemy(bottle) {
        this.level.enemies.forEach((enemy, index) => {
            if (bottle.isColliding(enemy)) {
                if (enemy.health >0) {
                    enemy.health--;          
                } 
                if (enemy.health ==0) {
                    this.removeBody(index);
                    
                }     
                
                console.log(enemy.health);
                console.log(this.enemies);
            }
        });
    }

    checkBottle() {
        this.throwableObjects.forEach((bottle, index) => {
            this.hitEnemy(bottle);

        })

    }



    setWorld() {
        this.character.world = this;
        this.throwableObjects.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, 700, 400);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToMap(this.level.background);
        this.addToMap(this.character);
        this.addToMap(this.statusbarEndboss);
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.level.salsabottle);
        this.addObjectToMap(this.level.clouds);
        this.addObjectToMap(this.level.coins);
        this.addObjectToMap(this.throwableObjects);
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