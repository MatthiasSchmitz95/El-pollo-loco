class Character extends MoveableObject{
    height = 250;
    width = 100;

    IMAGES_WALKINg = [
        '../img/2_character_pepe/2_walk/W-21.png',
        '../img/2_character_pepe/2_walk/W-22.png',
        '../img/2_character_pepe/2_walk/W-23.png',
        '../img/2_character_pepe/2_walk/W-24.png',
        '../img/2_character_pepe/2_walk/W-25.png',
        '../img/2_character_pepe/2_walk/W-26.png'
        
    ]

    


    constructor(y){
        super().loadImage('../img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKINg);
        this.y = y;

        this.animate();
        
        
    }

    animate(){
        setInterval(()=>{
            let i = this.currentImg % this.IMAGES_WALKINg.length;
            let path =this.IMAGES_WALKINg[i];
            this.img = this.imageCache[path];
            this.currentImg++;

        },100)


    }


    jump(){

    }
}