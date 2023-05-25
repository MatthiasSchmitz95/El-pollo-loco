let level1;
function startLevel(){ 

level1 = new Level(
    [
        new BackgroundObject('img/5_background/layers/air.png', -719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),

        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),

        new BackgroundObject('img/5_background/layers/air.png', 719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),

        new BackgroundObject('img/5_background/layers/air.png', 719 * 2),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 2),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 2),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 2)
    ],
    [new Chicken(), new ChickenSmall(), new Chicken(), new ChickenSmall(), new Chicken(), new ChickenSmall(), new Endboss()],
    [new Clouds(100), new Clouds(750), new Clouds(800), new Clouds(400), new Clouds(900), new Clouds(1300)],
    [new Coin(), new Coin(), new Coin()],
    [new Salsabottle(), new Salsabottle(), new Salsabottle(), new Salsabottle(),new Salsabottle(), new Salsabottle(), new Salsabottle(), new Salsabottle()]

);

}