class Coin extends MoveableObject {
    y = 310;
    x = 200;

    offset = {
        top: 50,
        bottom: 50,
        left: 70,
        right: 70
    }

    IMAGES_SPIN = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ]

    constructor(x, y) {
        super().loadImage('img/8_coin/coin_1.png');
        this.loadImages(this.IMAGES_SPIN);
        this.x = x + Math.random() * 500;
        this.y = y + Math.random() * 500;
        this.animate();
    }

    animate() {
        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_SPIN);

        }, 500)
    }
}