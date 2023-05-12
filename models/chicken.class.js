class Chicken extends MoveableObject{
    y=335;
    width = 90;
    height = 90;
    

    constructor(){
        super().loadImage('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = 200 + Math.random() * 500
    }



}