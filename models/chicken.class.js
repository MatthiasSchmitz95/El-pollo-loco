class Chicken extends MoveableObject{
    y=335;
    width = 90;
    height = 90;

    IMAGES_WALKINg = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
        
        
    ]
    

    constructor(){
        super().loadImage('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKINg);

        this.x = 200 + Math.random() * 500;
        this.animate();
    }

    animate(){
        this.moveLeft();
        setInterval(()=>{
            let i = this.currentImg % this.IMAGES_WALKINg.length;
            let path =this.IMAGES_WALKINg[i];
            this.img = this.imageCache[path];
            this.currentImg++;

        },200)
    
    }



}