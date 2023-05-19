class ThrowableObjects extends MoveableObject {
    speedX = 5;
    speedY = 5;

    constructor(x,y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.x = 100;
        this.y = 100;
        this.height = 60;
        this.width = 50;
        this.throw(x,y);
    }

    throw(x, y) {
        this.speedY = 30;
        this.x = x;
        this.y = y;
        this.applyGravity();
        setInterval(()=>{
            this.x +=10;
        },25)

    }



}