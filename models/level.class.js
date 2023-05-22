class Level {
    background;
    enemies;
    clouds;
    coins;
    salsabottle;
    throwableObjects;

    constructor(background, enemies, clouds, coins, salsabottle, throwableObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.background = background;
        this.coins = coins;
        this.salsabottle = salsabottle;
        this.throwableObjects = throwableObjects;
    }
}