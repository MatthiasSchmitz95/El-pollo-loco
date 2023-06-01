let level1;
function startLevel() {

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
        [new Chicken(400), new ChickenSmall(700), new Chicken(800), new ChickenSmall(1100), new Chicken(1200), new ChickenSmall(400), new Endboss()],
        [new Clouds(100), new Clouds(750), new Clouds(800), new Clouds(400), new Clouds(900), new Clouds(1300)],
        [new Coin(300, 100), new Coin(500, 200), new Coin(700, 100),new Coin(900, 100)],
        [new Salsabottle(100), new Salsabottle(150), new Salsabottle(200),new Salsabottle(300), new Salsabottle(450), new Salsabottle(700), new Salsabottle(800), new Salsabottle(750), new Salsabottle(900)]

    );

}