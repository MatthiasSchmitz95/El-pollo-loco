/**
 * Class representing a Character object.
 * Extends MoveableObject class.
 */
 class Character extends MoveableObject {
    height = 250;
    width = 100;
    speed = 5;
    y = 180;
    health = 100;
    coins = 0;
    bottles = 0;
    otherDirection;
    world;

    offset = {
        top: 50,
        left: 20,
        right: 20,
        bottom: 10  
    };

    IMAGES_IDLE = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png',
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_AIR = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ];

    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ];

    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];

    /**
     * Creates an instance of Character.
     */
    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_AIR);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_IDLE);
        this.animate();
        this.applyGravity();
    }

    /**
     * Handles the right arrow key input.
     * Moves the character to the right if within the boundaries.
     */
    keyRight() {
        if (this.world.keyboard.RIGHT && this.x < 1620) {
            this.moveRight();
            this.otherDirection = false;
            walking_sound.play();
        }
    }

    /**
     * Handles the left arrow key input.
     * Moves the character to the left if within the boundaries.
     */
    keyLeft() {
        if (this.world.keyboard.LEFT && this.x > 0) {
            this.moveLeft();
            this.otherDirection = true;
            walking_sound.play();
        }
    }

    /**
     * Handles the spacebar key input.
     * Makes the character jump if not already in the air.
     */
    keySpace() {
        if (this.world.keyboard.SPACE && !this.isAboveGround()) {
            jump_sound.play();
            this.jump();
        }
    }

    /**
     * Updates the character's position based on speedX and speedY.
     */
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    /**
     * Animates the character's movement and appearance.
     */
    animate() {
        setStoppableInterval(() => {
            walking_sound.pause();
            this.keyRight();
            this.keyLeft();
            this.keySpace();
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);
        this.stanceAnimations();
    }

    /**
     * Handles the animations for the character's stance.
     */
    stanceAnimations() {
        setStoppableInterval(() => {
            if (this.isDead()) {
                this.forDead();
            } else if (this.isHurt()) {
                this.forHurt();
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_AIR);
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALKING);
            } else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 100);
    }

    /**
     * Handles the animations for when the character is dead.
     */
    forDead() {
        death_sound.play();
        this.playAnimation(this.IMAGES_DEAD);
        setTimeout(() => {
            endGame();
            this.pauseSounds();
        }, 1000);
    }

    /**
     * Handles the animations for when the character is hurt.
     */
    forHurt() {
        this.playAnimation(this.IMAGES_HURT);
        hurt_sound.play();
    }

    /**
     * Pauses the walking and jump sounds.
     */
    pauseSounds() {
        walking_sound.pause();
        jump_sound.pause();
    }
}
