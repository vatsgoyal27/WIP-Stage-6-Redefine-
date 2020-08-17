class levl5{
    constructor(){
        
    }
    display(){
        target.x = 585;
        target.y = 390;

        collide(player, ground12);
        collide(player, ground13);
        collide(player, ground14);
        collide(player, ground15);

        ground1.x = 20000;
        ground2.x = 20000;
        ground3.x = 20000;

        ground4.x = 200000;
        ground5.x = 200000;
        ground6.x = 200000;

        ground7.x = 2000000;
        ground8.x = 2000000;
        ground9.x = 2000000;
        ground10.y = 2000000;
        ground11.y = 2000000;

        ground12.y = 300;
        ground13.y = 340;
        ground14.y = 380;
        ground15.y = 420;
        ground12.x = 70;
        ground13.x = 230;
        ground14.x = 390;
        ground15.x = 540;

        ground16.y = 2000000;
        ground17.y = 2000000;
        ground18.y = 2000000;

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

        if (keyDown("space") && player.x < 150){
            if (player.y > 270){
            player.velocityY = -20;
            }
        }
        if (keyDown("space") && player.x >= 150 && player.x < 305){
            if (player.y > 310){
            player.velocityY = -20;
            }
        }
        if (keyDown("space") && player.x >= 305 && player.x < 465){
            if (player.y > 350){
            player.velocityY = -20;
            }
        }
        if (keyDown("space") && player.x >= 465){
            if (player.y > 390){
            player.velocityY = -20;
            }
        }


        if(collide(player, ground12) && playerColor !== "blue"){
            playerDeath = 1;
        }
        if(collide(player, ground13) && playerColor !== "red"){
            playerDeath = 1;
        }
        if(collide(player, ground14) && playerColor !== "yellow"){
            playerDeath = 1;
        }
        if(collide(player, ground15) && playerColor !== "blue"){
            playerDeath = 1;
        }
        if(collide(player, ground12)){
            player.x = player.x + 3;
        }
        if(collide(player, ground13)){
            player.x = player.x - 3;
        }
        if(collide(player, ground14)){
            player.x = player.x + 3;
        }
        if(collide(player, ground15)){
            player.x = player.x - 3;
        }

    }

}