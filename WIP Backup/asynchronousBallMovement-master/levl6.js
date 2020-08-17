class levl6{
    constructor(){


    }
    display(){
        target.x = 570;
        target.y = 275;

        collide(player, ground16);
        collide(player, ground17);
        collide(player, ground18);

        ground1.x = 200000;
        ground2.x = 200000;
        ground3.x = 200000;
        ground4.x = 200000;
        ground5.x = 200000;
        ground6.x = 200000;
        ground7.x = 2000000;
        ground8.y = 2000000;
        ground9.y = 2000000;
        ground10.y = 2000000;
        ground11.y = 2000000;
        ground12.y = 2000000;
        ground13.y = 2000000;
        ground14.y = 2000000;
        ground15.y = 2000000;

        ground16.y = 300;
        ground17.y = 550;
        ground18.y = 300;
        ground16.x = 100;
        ground17.x = 300;
        ground18.x = 500;

        ground19.y = 2000000;
        ground20.y = 2000000;
        ground21.y = 2000000;
        ground22.y = 2000000;

        ground23.y = 300000;
        ground24.y = 200000;
        ground25.y = 400000;
        ground26.y = 300000;
        
        ground27.y = 2000000;
        ground28.y = 2000000;

        reverse.y = 20000000;
        reverse2.y = 20000000;

        level1Teleport.y = 200000000000;
        level2Teleport.y = 200000000000;
        level3Teleport.y = 200000000000;
        level4Teleport.y = 200000000000;
        level5Teleport.y = 200000000000;
        level6Teleport.y = 200000000000;
        level7Teleport.y = 200000000000;
        level8Teleport.y = 200000000000;
        level9Teleport.y = 200000000000;

        if(collide(player, ground16) && playerColor !== "blue"){
            playerDeath = 1;
        }
        if(collide(player, ground17) && playerColor == "red"){
            player.x = 420;
            player.y = 50;
        }
        if(collide(player, ground17) && playerColor == "blue"){
            player.x = 180;
            player.y = 50;
        }
        if(collide(player, ground17) && playerColor == "yellow"){
            player.x = 300;
            player.y = 300;
        }
        if(collide(player, ground18) && playerColor !== "red"){
            playerDeath = 1;
        }

        if (keyDown("space") && player.x < 210){
            if (player.y > 270){
            player.velocityY = -20;
            }
        }
        if (keyDown("space") && player.x >= 210 && player.x < 380){
            if (player.y > 520){
            player.velocityY = -20;
            }
        }
        if (keyDown("space") && player.x >= 380){
            if (player.y > 270){
            player.velocityY = -20;
            }
        }

    }

}