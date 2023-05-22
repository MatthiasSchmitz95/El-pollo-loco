class StatusbarCoin extends DrawableObjects{  
        x=50;
        y=30;
        height=50;
        width= 200;
        IMAGES_COINS=[
            'img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png'
            
        ];
    
        percentageCoin =0;
    
        constructor(){
            super();
            this.loadImages(this.IMAGES_COINS) ;
            this.setPercentage(0);
           
        }
    
        setPercentage(percentageCoin){
            this.percentageCoin = percentageCoin;
            let path = this.IMAGES_COINS[this.imgIndexof()];
            this.img = this.imageCache[path];
        }
    
        imgIndexof(){
            if (this.percentageCoin == 100) {
                return 5;
                
            }
            if (this.percentageCoin == 80) {
                return 4;
                
            }
            if (this.percentageCoin == 60) {
                return 3;
                
            }
            if (this.percentageCoin == 40) {
                return 2;
                
            }
            if (this.percentageCoin == 20) {
                return 1;
                
            }
            if (this.percentageCoin == 0) {
                return 0;
                
            }
        }
    
    
    }

