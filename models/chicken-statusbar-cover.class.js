class Cover extends DrawableObjects {
    x = 615;
    y = 26;

    width = 85;
    height = 85;

    IMG = 'img/7_statusbars/3_icons/icon_health_endboss.png';


    constructor() {
        super().loadImage(this.IMG);
    }
}