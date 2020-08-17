class levlMenu{
    constructor(){


    }
    display(){
        target.x = 50000;

        ground1.y = 3000000;
        ground2.y = 3000000;
        ground3.y = 3000000;

        player.y = 2000000;

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
        reverse.y = 20000000;
        reverse2.y = 20000000;
        ground23.y = 2000000;
        ground24.y = 2000000;
        ground25.y = 2000000;
        ground26.y = 2000000;

        ground27.y = 2000000;
        ground28.y = 2000000;

        level1Teleport.y = 100;
        level2Teleport.y = 100;
        level3Teleport.y = 100;
        level4Teleport.y = 300;
        level5Teleport.y = 300;
        level6Teleport.y = 300;
        level7Teleport.y = 500;
        level8Teleport.y = 500;
        level9Teleport.y = 500;
        level1Teleport.x = 100;
        level2Teleport.x = 300;
        level3Teleport.x = 500;
        level4Teleport.x = 100;
        level5Teleport.x = 300;
        level6Teleport.x = 500;
        level7Teleport.x = 100;
        level8Teleport.x = 300;
        level9Teleport.x = 500;

        if(com0 == 1){
            level1Teleport.shapeColor = "green";
        }
        if(com1 == 1){
            level2Teleport.shapeColor = "green";
        }
        if(com2 == 1){
            level3Teleport.shapeColor = "green";
        }
        if(com3 == 1){
            level4Teleport.shapeColor = "green";
        }
        if(com4 == 1){
            level5Teleport.shapeColor = "green";
        }
        if(com5 == 1){
            level6Teleport.shapeColor = "green";
        }
        if(com6 == 1){
            level7Teleport.shapeColor = "green";
        } 
        if(com7 == 1){
            level8Teleport.shapeColor = "green";
        }    
        if(com8 == 1){
            level9Teleport.shapeColor = "green";
        }    
        
        if(isTouching(playerPointer, level1Teleport) && com0 == 1 && keyDown(89)){
            player.x = 50;
            player.y = 100;
            gameState = 1;
            player.velocityY = 0;
            player.velocityX = 0;
            player.shapeColor = "blue";
            playerColor = "blue";
            playerDeath = 0;
            direction = 0;
        }
        if(isTouching(playerPointer, level2Teleport) && com1 == 1 && keyDown(89)){
            player.x = 50;
            player.y = 100;
            gameState = 2;
            player.velocityY = 0;
            player.velocityX = 0;
            player.shapeColor = "blue";
            playerColor = "blue";
            playerDeath = 0;
            direction = 0;
        }
        if(isTouching(playerPointer, level3Teleport) && com2 == 1 && keyDown(89)){
            player.x = 50;
            player.y = 100;
            gameState = 3;
            player.velocityY = 0;
            player.velocityX = 0;
            player.shapeColor = "blue";
            playerColor = "blue";
            playerDeath = 0;
            direction = 0;
        }
        if(isTouching(playerPointer, level4Teleport) && com3 == 1 && keyDown(89)){
            player.x = 50;
            player.y = 100;
            gameState = 4;
            player.velocityY = 0;
            player.velocityX = 0;
            ground11.shapeColor = "blue";
            player.shapeColor = "blue";
            playerColor = "blue";
            playerDeath = 0;
            direction = 0;
        }
        if(isTouching(playerPointer, level5Teleport) && com4 == 1 && keyDown(89)){
            player.x = 50;
            player.y = 100;
            gameState = 5;
            player.velocityY = 0;
            player.velocityX = 0;
            player.shapeColor = "blue";
            playerColor = "blue";
            playerDeath = 0;
            direction = 0;
        }
        if(isTouching(playerPointer, level6Teleport) && com5 == 1 && keyDown(89)){
            player.x = 50;
            player.y = 100;
            gameState = 6;
            player.velocityY = 0;
            player.velocityX = 0;
            player.shapeColor = "blue";
            playerColor = "blue";
            playerDeath = 0;
            direction = 0;
        }
        if(isTouching(playerPointer, level7Teleport) && com6 == 1 && keyDown(89)){
            player.x = 50;
            player.y = 100;
            gameState = 7;
            player.velocityY = 0;
            player.velocityX = 0;
            player.shapeColor = "blue";
            playerColor = "blue";
            playerDeath = 0;
            direction = 0;
        }
        if(isTouching(playerPointer, level8Teleport) && com7 == 1 && keyDown(89)){
            player.x = 50;
            player.y = 100;
            gameState = 8;
            player.velocityY = 0;
            player.velocityX = 0;
            player.shapeColor = "blue";
            playerColor = "blue";
            playerDeath = 0;
            direction = 0;
        }
        if(isTouching(playerPointer, level9Teleport) && com8 == 1 && keyDown(89)){
            player.x = 50;
            player.y = 100;
            gameState = 9;
            player.velocityY = 0;
            player.velocityX = 0;
            player.shapeColor = "blue";
            playerColor = "blue";
            playerDeath = 0;
            direction = 0;
        }
        

        isTouching(playerPointer, level1Teleport);
        isTouching(playerPointer, level2Teleport);
        isTouching(playerPointer, level3Teleport);
        isTouching(playerPointer, level4Teleport);
        isTouching(playerPointer, level5Teleport);
        isTouching(playerPointer, level6Teleport);
        isTouching(playerPointer, level7Teleport);
        isTouching(playerPointer, level8Teleport);
        isTouching(playerPointer, level9Teleport);


    }

}