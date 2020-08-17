class levl8{
    constructor(){


    }
    display(){
        target.x = 570;
        target.y = 275;

        collide(player, ground23);
        collide(player, ground24);
        collide(player, ground25);
        collide(player, ground26);

        ground1.y = 2000000;
        ground2.y = 30000000;
        ground3.y = 30000000;

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
        ground16.y = 2000000;
        ground17.y = 2000000;
        ground18.y = 2000000;
        ground19.y = 2000000;
        ground20.y = 2000000;
        ground21.y = 2000000;
        ground22.y = 2000000;
        ground27.y = 2000000;
        ground28.y = 2000000;
        reverse.y = 20000000;
        reverse2.y = 20000000;

        ground23.y = 330;
        ground24.y = 270;
        ground25.y = 450;
        ground26.y = 310;
        ground23.x = 75;
        ground24.x = 225;
        ground25.x = 375;
        ground26.x = 540;

        level1Teleport.y = 200000000000;
        level2Teleport.y = 200000000000;
        level3Teleport.y = 200000000000;
        level4Teleport.y = 200000000000;
        level5Teleport.y = 200000000000;
        level6Teleport.y = 200000000000;
        level7Teleport.y = 200000000000;
        level8Teleport.y = 200000000000;
        level9Teleport.y = 200000000000;

        if(collide(player, ground23)){
            player.x = player.x + 3;
        }
        if(collide(player, ground24)){
            player.x = player.x - 3;
        }
        if(collide(player, ground26)){
            player.x = player.x - 3;
        }
        
        if(collide(player, ground23) && playerColor !== "blue"){
            playerDeath = 1;
        }
        if(collide(player, ground24) && playerColor !== "red"){
            playerDeath = 1;
        }
        if(collide(player, ground26) && playerColor !== "yellow"){
            playerDeath = 1;
        }

        if(collide(player, ground25) && playerColor == "blue"){
            player.x = 50;
            player.y = 200;
        }
        if(collide(player, ground25) && playerColor == "red"){
            player.x = 200;
            player.y = 190;
        }
        if(collide(player, ground25) && playerColor == "yellow"){
            player.x = 520
            player.y = 240;
        }

        if (keyDown("space") && player.x < 155){
            if (player.y > 305){
            player.velocityY = -20;
            }
        }
        if (keyDown("space") && player.x >= 155 && player.x < 310){
            if (player.y > 245){
            player.velocityY = -20;
            }
        }
        if (keyDown("space") && player.x >= 310 && player.x < 460){
            if (player.y > 425){
            player.velocityY = -20;
            }
        }
        if (keyDown("space") && player.x >= 460){
            if (player.y > 285){
            player.velocityY = -20;
            }
        }

    }

}