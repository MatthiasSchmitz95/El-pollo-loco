/**
 * Represents clouds that extend the MoveableObject class.
 * @extends MoveableObject
 */
 class Clouds extends MoveableObject {
    /**
     * The y-coordinate of the clouds.
     * @type {number}
     * @default 10
     */
    y = 10;

    /**
     * Constructs a new Clouds instance.
     * @param {number} x - The initial x-coordinate of the clouds.
     */
    constructor(x) {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = x;
        this.animate();
    }

    /**
     * Animates the clouds' movements.
     */
    animate() {
        setStoppableInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}
