class levl3{
    constructor(){
        
    }
    display(){
        target.x = 570;
        target.y = 275;

        collide(player, ground7);
        collide(player, ground8);
        collide(player, ground9);
        collide(player, ground10);

        ground1.x = 20000;
        ground2.x = 20000;
        ground3.x = 20000;

        ground4.x = 200000;
        ground5.x = 200000;
        ground6.x = 200000;

        ground7.x = 100;
        ground7.y = 300;

        ground8.x = 270;
        ground8.y = 190;
        ground9.x = 350;
        ground9.y = 330;
        ground10.x = 460;
        ground10.y = 300; 
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

        reverse.y = 20000000;
        reverse2.y = 20000000;

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

        if (keyDown("space") && player.y > 270 && player.x < 245){
            player.velocityY = -20;
        }
        if (keyDown("space") && player.y > 160 && player.x > 245 && player.x < 320){
            player.velocityY = -20;
        }
        if (keyDown("space") && player.y > 300 && player.x > 320 && player.x < 380){
            player.velocityY = -20;
        }
        if (keyDown("space") && player.y > 270 && player.x > 380){
            player.velocityY = -20;
        }

        if(collide(player, ground7) && playerColor !== "blue"){
            playerDeath = 1;
        }
        if(collide(player, ground8) && playerColor !== "red"){
            playerDeath = 1;
        }
        if(collide(player, ground9) && playerColor !== "yellow"){
            playerDeath = 1;
        }
        if(collide(player, ground10) && playerColor !== "red"){
            playerDeath = 1;
        }

    }

}