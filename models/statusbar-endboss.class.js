class StatusbarEndboss extends DrawableObjects {

    x = 50;
    y = 15;
    width = 200;
    height = 80;

    IMAGES_HPENDBOSS = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png'


    ];

    percentage = 35;

    constructor() {
        super().loadImage('img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png');
        this.loadImages(this.IMAGES_HPENDBOSS);
        this.setPercentage(35);
    };

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HPENDBOSS[this.imgIndexof()];
        this.img = this.imageCache[path];
    }

    imgIndexof() {
        if (this.percentage == 35) {
            return 5;

        }
        if (this.percentage <= 34 && this.percentage >= 25) {
            return 4;

        }
        if (this.percentage <= 25 && this.percentage >= 19) {
            return 3;

        }
        if (this.percentage <= 19 && this.percentage >= 10) {
            return 2;

        }
        if (this.percentage <= 10 && this.percentage >= 1) {
            return 1;

        }
        if (this.percentage == 0) {
            return 0;

        }
    }


}

