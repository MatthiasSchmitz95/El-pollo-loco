class StatusbarBottle extends DrawableObjects {

    x = 50;
    y = 70;
    height = 50;
    width = 200;
    IMAGES_BOTTLES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png'

    ];

    percentageBottle = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES_BOTTLES);
        this.setPercentage(0);

    }

    setPercentage(percentageBottle) {
        this.percentageBottle = percentageBottle;
        let path = this.IMAGES_BOTTLES[this.imgIndexof()];
        this.img = this.imageCache[path];
    }

    imgIndexof() {
        if (this.percentageBottle == 100) {
            return 5;

        }
        if (this.percentageBottle == 80) {
            return 4;

        }
        if (this.percentageBottle == 60) {
            return 3;

        }
        if (this.percentageBottle == 40) {
            return 2;

        }
        if (this.percentageBottle == 20) {
            return 1;

        }
        if (this.percentageBottle == 0) {
            return 0;

        }
    }


}


