/**
 * Represents an end boss enemy that extends the MoveableObject class.
 * @extends MoveableObject
 */
 class Endboss extends MoveableObject {
    /**
     * The x-coordinate of the end boss.
     * @type {number}
     * @default 1700
     */
    x = 1700;

    /**
     * The y-coordinate of the end boss.
     * @type {number}
     * @default 50
     */
    y = 50;

    /**
     * The height of the end boss.
     * @type {number}
     * @default 400
     */
    height = 400;

    /**
     * The width of the end boss.
     * @type {number}
     * @default 300
     */
    width = 300;

    /**
     * The health of the end boss.
     * @type {number}
     * @default 6
     */
    health = 6;

    /**
     * The speed of the end boss.
     * @type {number}
     * @default 0
     */
    speed = 0;

    /**
     * Indicates whether the end boss is hurt.
     * @type {boolean}
     * @default false
     */
    hurt = false;

    /**
     * Indicates whether the end boss has made first contact.
     * @type {boolean}
     * @default false
     */
    firstContact = false;

    /**
     * Indicates whether the end boss has been hit.
     * @type {boolean}
     * @default false
     */
    hitBoss = false;

    /**
     * The offset values for collision detection.
     * @type {object}
     * @property {number} top - The top offset.
     * @property {number} bottom - The bottom offset.
     * @property {number} left - The left offset.
     * @property {number} right - The right offset.
     */
    offset = {
        top: 50,
        bottom: 10,
        left: 55,
        right: 90
    };

    /**
     * An array of image paths for the alert animation.
     * @type {string[]}
     */
    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    /**
     * An array of image paths for the attack animation.
     * @type {string[]}
     */
    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ];

    /**
     * An array of image paths for the walk animation.
     * @type {string[]}
     */
    IMAGES_WALK = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    /**
     * An array of image paths for the hurt animation.
     * @type {string[]}
     */
    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    /**
     * An array of image paths for the dead animation.
     * @type {string[]}
     */
    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png'
    ];

    /**
     * Creates a new instance of the Endboss class.
     */
    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_HURT);
        this.animate();
    }

    /**
     * Plays the animation for the end boss.
     */
    animate() {
        let i = 0;
        setStoppableInterval(() => {
            if (this.isDead()) {
                this.deathAnimation();
            } else if (!this.hitBoss && this.firstContact) {
                this.attackAnimation();
            } else if (this.hitBoss) {
                this.hurtAnimation();
            } else {
                if (i < 10) {
                    this.playAnimation(this.IMAGES_ALERT);
                } else {
                    if (i > 10 && this.firstContact)
                        this.attackAnimation();
                }
                i++;
            }

            if (world.character.x > 1300 && !this.firstContact) {
                i = 0;
                this.firstContact = true;
            }
        }, 100);
    }

    /**
     * Plays the death animation for the end boss and ends the game.
     */
    deathAnimation() {
        this.playAnimation(this.IMAGES_DEAD);
        setTimeout(() => {
            endGame();
        }, 700);
    }

    /**
     * Plays the hurt animation for the end boss and resets the hitBoss flag.
     */
    hurtAnimation() {
        this.playAnimation(this.IMAGES_HURT);
        this.speed = 4;
        this.moveLeft();
        setTimeout(() => {
            this.hitBoss = false;
        }, 1500);
    }

    /**
     * Plays the attack animation for the end boss.
     */
    attackAnimation() {
        this.playAnimation(this.IMAGES_ATTACK);
        this.speed = 6;
        this.moveLeft();
    }
}
