class levl7{
    constructor(){
        
    }
    display(){
        target.x = 565;
        target.y = 320;

        collide(player, ground19);
        collide(player, ground20);
        collide(player, ground21);
        collide(player, ground22);

        ground1.x = 20000;
        ground2.x = 20000;
        ground3.x = 20000;

        ground4.x = 20000;
        ground5.x = 20000;
        ground6.x = 20000;

        ground7.x = 2000000;
        ground8.x = 2000000;
        ground9.x = 2000000;
        ground10.y = 2000000;
        ground11.y = 2000000;

        ground12.y = 2000000;
        ground13.y = 2000000;
        ground14.y = 2000000;
        ground15.y = 2000000;

        ground16.y = 2000000;
        ground17.y = 2000000;
        ground18.y = 2000000;

        ground19.y = 300;
        ground20.y = 350;
        ground21.y = 300;
        ground22.y = 350;
        ground19.x = 75;
        ground20.x = 225;
        ground21.x = 375;
        ground22.x = 525;

        reverse2.x = 100;
        reverse2.y = 250;
        reverse.x = 400;
        reverse.y = 250;

        ground23.y = 300000;
        ground24.y = 200000;
        ground25.y = 400000;
        ground26.y = 300000;
        ground27.y = 2000000;
        ground28.y = 2000000;

        level1Teleport.y = 200000000000;
        level2Teleport.y = 200000000000;
        level3Teleport.y = 200000000000;
        level4Teleport.y = 200000000000;
        level5Teleport.y = 200000000000;
        level6Teleport.y = 200000000000;
        level7Teleport.y = 200000000000;
        level8Teleport.y = 200000000000;
        level9Teleport.y = 200000000000;

        if (keyDown("space") && player.x < 155){
            if (player.y > 270){
            player.velocityY = -20;
            }
        }
        if (keyDown("space") && player.x >= 155 && player.x < 300){
            if (player.y > 320){
            player.velocityY = -20;
            }
        }
        if (keyDown("space") && player.x >= 300 && player.x < 455){
            if (player.y > 273){
            player.velocityY = -20;
            }
        }
        if (keyDown("space") && player.x >= 455){
            if (player.y > 320){
            player.velocityY = -20;
            }
        }

        if(collide(player, ground19) && playerColor !== "blue"){
            playerDeath = 1;
        }
        if(collide(player, ground20) && playerColor !== "yellow"){
            playerDeath = 1;
        }
        if(collide(player, ground21) && playerColor !== "red"){
            playerDeath = 1;
        }
        if(collide(player, ground22) && playerColor !== "yellow"){
            playerDeath = 1;
        }

    }

}