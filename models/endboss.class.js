class Endboss extends MoveableObject {
    x = 1700;
    y = 50;
    height = 400;
    width = 300;
    health = 6;
    speed = 0;
    hurt = false;
    firstContact = false;
    hitBoss = false;

    offset = {
        top: 50,
        bottom: 10,
        left: 55,
        right: 90
    }

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

    IMAGES_WALK = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'


    ];

    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        "img/4_enemie_boss_chicken/4_hurt/G23.png"
    ];

    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',



    ];

    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_HURT);
        this.animate();

    }

    animate() {
        let i = 0;
        setStoppableInterval(() => {
            if (this.isDead()) {
                this.deathAnimation();
            } else
                if (!this.hitBoss && this.firstContact) {
                    this.attackAnimation();

                } else
                    if (this.hitBoss) {
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

    deathAnimation() {
        this.playAnimation(this.IMAGES_DEAD);
        setTimeout(() => {
            endGame();
        }, 700);

    }

    hurtAnimation() {
        this.playAnimation(this.IMAGES_HURT);
        this.speed = 4;
        this.moveLeft();
        setTimeout(() => {
            this.hitBoss = false;
        }, 1500);

    }



    attackAnimation() {
        this.playAnimation(this.IMAGES_ATTACK);
        this.speed = 6;
        this.moveLeft();

    }

}