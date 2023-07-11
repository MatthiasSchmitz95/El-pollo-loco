/**
 * Represents the game world.
 */
 class World {
    /**
     * The character in the world.
     * @type {Character}
     */
    character = new Character();

    /**
     * The status bar for health.
     * @type {Statusbar}
     */
    statusbar = new Statusbar();

    /**
     * The status bar for coins.
     * @type {StatusbarCoin}
     */
    statusbarCoin = new StatusbarCoin();

    /**
     * The status bar for bottles.
     * @type {StatusbarBottle}
     */
    statusbarBottle = new StatusbarBottle();

    /**
     * The status bar for the end boss.
     * @type {StatusbarEndboss}
     */
    statusbarEndboss = new StatusbarEndboss();

    /**
     * The cover object.
     * @type {Cover}
     */
    cover = new Cover();

    /**
     * The throwable objects in the world.
     * @type {ThrowableObjects[]}
     */
    throwableObjects = [];

    /**
     * The current level.
     * @type {object}
     */
    level = level1;

    /**
     * The keyboard input handler.
     * @type {object}
     */
    keyboard;

    /**
     * The x-coordinate of the camera.
     * @type {number}
     */
    camera_x = -100;

    /**
     * The number of thrown objects.
     * @type {number}
     */
    thrown = 0;

    /**
     * Indicates if an object was just thrown.
     * @type {boolean}
     */
    justThrown = false;

    /**
     * The canvas element.
     * @type {HTMLCanvasElement}
     */
    canvas;

    /**
     * The rendering context of the canvas.
     * @type {CanvasRenderingContext2D}
     */
    ctx;

    /**
     * Indicates if an explosion effect is happening.
     * @type {boolean}
     */
    explosion = false;

    /**
     * Creates a new game world.
     * @param {HTMLCanvasElement} canvas - The canvas element.
     * @param {object} keyboard - The keyboard input handler.
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.draw();
        this.keyboard = keyboard;
        this.setWorld();
        this.checkCollisions();
    }

    /**
     * Checks for collisions between game objects.
     */
    checkCollisions() {
        setStoppableInterval(() => {
            this.enemyCollision();
            this.coinCollision();
            this.bottleCollision();
            this.checkThrowObject();
            this.checkBottle();
        }, 25);
    }

    /**
     * Checks if the character throws an object.
     */
    checkThrowObject() {
        if (this.keyboard.D && this.thrown !== 0 && this.justThrown == false) {
            let bottle = new ThrowableObjects(this.character.x + 50, this.character.y + 120, this.character.otherDirection);
            this.throwableObjects.push(bottle);
            this.character.loseBottle();
            this.statusbarBottle.setPercentage(this.character.bottles);
            this.thrown--;
            this.justThrown = true;
            setTimeout(() => {
                this.justThrown = false;
            }, 500);
        }
    }

    /**
     * Removes an enemy from the level.
     * @param {number} index - The index of the enemy in the level.
     */
    removeBody(index) {
        setTimeout(() => {
            this.level.enemies.splice(index, 1);
        }, 3000);
    }

    /**
     * Makes the character jump on the head of an enemy.
     * @param {object} enemy - The enemy object.
     */
    jumpOnHead(enemy) {
        if (!enemy.isDead()) {
            this.character.speedY = 20;
        }
    }

    /**
     * Handles collisions between the character and enemies.
     */
    enemyCollision() {
        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isColliding(enemy) && this.character.isAboveGround() && !this.character.isHurt() && !enemy.isDead() && !(enemy instanceof Endboss)) {
                this.jumpOnHead(enemy);
                if (enemy.health > 0) {
                    enemy.health--;
                    chicken_sound.play();
                }
            } else if (!this.character.isHurt() && this.character.isColliding(enemy) && !this.character.isAboveGround() && !enemy.isDead() || this.character.isColliding(enemy) && enemy instanceof Endboss && !this.character.isHurt()) {
                this.justHit = true;
                this.character.hit();
                this.statusbar.setPercentage(this.character.health);
                setTimeout(() => {
                    this.justHit = false;
                }, 100);
                
            }
        });
    }

    /**
     * Handles collisions between the character and coins.
     */
    coinCollision() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.character.collect();
                this.statusbarCoin.setPercentage(this.character.coins);
                this.level.coins.splice(index, 1);
            }
        });
    }

    /**
     * Handles collisions between the character and bottles.
     */
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

    /**
     * Handles hitting an enemy with a thrown bottle.
     * @param {object} bottle - The thrown bottle object.
     * @param {number} index - The index of the bottle in the throwableObjects array.
     */
    hitEnemy(bottle, index) {
        this.level.enemies.forEach((enemy) => {
            if (bottle.isColliding(enemy) && !enemy.isDead()) {
                enemy.health--;
                chicken_sound.play();
                bottle.explosion = true;
                setTimeout(() => {
                    this.removeBottle(index);
                }, 500);

                if (enemy instanceof Endboss) {
                    this.statusbarEndboss.setPercentage(enemy.health);
                    enemy.hitBoss = true;
                }
            }
        });
    }

    /**
     * Removes a bottle from the throwableObjects array.
     * @param {number} index - The index of the bottle in the throwableObjects array.
     */
    removeBottle(index) {
        this.throwableObjects.splice(index, 1);
    }

    /**
     * Checks for collisions between bottles and enemies.
     */
    checkBottle() {
        this.throwableObjects.forEach((bottle, index) => {
            if (!bottle.explosion) {
                this.hitEnemy(bottle, index);
            }
        });
    }

    /**
     * Sets the world reference for the character.
     */
    setWorld() {
        this.character.world = this;
    }

    /**
     * Draws the game world and its objects on the canvas.
     */
    draw() {
        this.ctx.clearRect(0, 0, 700, 400);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToMap(this.level.background);
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.level.salsabottle);
        this.addToMap(this.character);
        this.addObjectToMap(this.level.clouds);
        this.addObjectToMap(this.level.coins);
        this.addObjectToMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusbar);
        this.addToMap(this.statusbarCoin);
        this.addToMap(this.statusbarBottle);
        this.ctx.save();
        this.ctx.scale(-1, 1);
        this.ctx.translate(-canvas.width, 0);
        this.addToMap(this.statusbarEndboss);
        this.ctx.restore();
        this.addToMap(this.cover);
        this.ctx.translate(this.camera_x, 0);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;

        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
     * Adds an object or an array of objects to the rendering map.
     * @param {object|object[]} objects - The object(s) to be added to the map.
     */
    addObjectToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    /**
     * Adds an object to the rendering map.
     * @param {object} object - The object to be added to the map.
     */
    addToMap(object) {
        if (object.otherDirection) {
            object.flipImage(this.ctx);
        }
        object.draw(this.ctx);
        if (object.otherDirection) {
            object.flipImageBack(this.ctx);
        }
    }
}
