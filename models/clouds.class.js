class Clouds extends MoveableObject {
    y = 10;
    


    constructor() {
        super().loadImage('../img/5_background/layers/4_clouds/1.png')

        this.x = Math.random() * 500;
        this.animate();
    }

    animate() {
        this.moveLeft();
    }
}