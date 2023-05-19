class Statusbar extends DrawableObjects{
    x=50;
    y=-10;
    height=50;
    width= 200;
    IMAGES_HEALTH=[
        '../img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        '../img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        '../img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        '../img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        '../img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        '../img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png'
        
    ];

    percentage =100;

    constructor(){
        super().loadImage('../img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png');
        this.loadImages(this.IMAGES_HEALTH);
        this.setPercentage(100);
       
    }

    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.IMAGES_HEALTH[this.imgIndexof()];
        this.img = this.imageCache[path];
    }

    imgIndexof(){
        if (this.percentage == 100) {
            return 5;
            
        }
        if (this.percentage == 80) {
            return 4;
            
        }
        if (this.percentage == 60) {
            return 3;
            
        }
        if (this.percentage == 40) {
            return 2;
            
        }
        if (this.percentage == 20) {
            return 1;
            
        }
        if (this.percentage == 0) {
            return 0;
            
        }
    }


}