class Salsabottle extends DrawableObjects {
    x = 100;
    y = 360;
    height = 70;
    width = 50;
    IMAGE_SALSABOTTLE = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png',

    ]

    constructor(x) {
        super();
        this.loadImages(this.IMAGE_SALSABOTTLE);
        this.setImage();
        this.x = x + Math.random() * 500 ;
    }

    setImage() {
        let path = this.IMAGE_SALSABOTTLE[this.randomizer()];
        this.img = this.imageCache[path];
    }

    randomizer() {
        return Math.floor(Math.random() * 2);
    }
}