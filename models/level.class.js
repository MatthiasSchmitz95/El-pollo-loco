/**
 * Represents a level in the game.
 */
 class Level {
    /**
     * The background of the level.
     * @type {string}
     */
    background;

    /**
     * The enemies in the level.
     * @type {Enemy[]}
     */
    enemies;

    /**
     * The clouds in the level.
     * @type {Clouds[]}
     */
    clouds;

    /**
     * The coins in the level.
     * @type {Coin[]}
     */
    coins;

    /**
     * The salsabottle in the level.
     * @type {Salsabottle}
     */
    salsabottle;

    /**
     * The throwable objects in the level.
     * @type {ThrowableObjects[]}
     */
    throwableObjects;

    /**
     * Creates a new instance of the Level class.
     * @param {string} background - The background of the level.
     * @param {Enemy[]} enemies - The enemies in the level.
     * @param {Clouds[]} clouds - The clouds in the level.
     * @param {Coin[]} coins - The coins in the level.
     * @param {Salsabottle} salsabottle - The salsabottle in the level.
     * @param {ThrowableObjects[]} throwableObjects - The throwable objects in the level.
     */
    constructor(background, enemies, clouds, coins, salsabottle, throwableObjects) {
        this.background = background;
        this.enemies = enemies;
        this.clouds = clouds;
        this.coins = coins;
        this.salsabottle = salsabottle;
        this.throwableObjects = throwableObjects;
    }
}
