class levl9{
    constructor(){


    }
    display(){
        target.x = 570;
        target.y = 275;

        collide(player, ground27);
        collide(player, ground28);

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
        reverse.y = 20000000;
        reverse2.y = 20000000;

        ground23.y = 20000;
        ground24.y = 22000;
        ground25.y = 40000;
        ground26.y = 300000;;


        level1Teleport.y = 200000000000;
        level2Teleport.y = 200000000000;
        level3Teleport.y = 200000000000;
        level4Teleport.y = 200000000000;
        level5Teleport.y = 200000000000;
        level6Teleport.y = 200000000000;
        level7Teleport.y = 200000000000;
        level8Teleport.y = 200000000000;
        level9Teleport.y = 200000000000;

        ground27.y = 300;
        ground28.y = 300;
        ground27.x = 140
        ground28.x = 420;

        if (keyDown("space") && player.y > 270){
            player.velocityY = -20;
        }
        
        if(gameState == 9){
        change2 = change2 + 1;
        rand2 = random(1, 100)
        }
        
        if(change2 % 50 == 0){
            if(rand2 >= 50){
                ground27.shapeColor = "red";
                ground28.shapeColor = "yellow";
                
            }
            if(rand2 < 50){
                ground27.shapeColor = "yellow";
                ground28.shapeColor = "blue";
            }

        }

        if(ground27.shapeColor == "red"){
            p27color = "red";
        }
        if(ground17.shapeColor == "blue"){
            p27color = "blue";
        }
        if(ground27.shapeColor == "yellow"){
            p27color = "yellow";
        }
        if(ground28.shapeColor == "red"){
            p28color = "red";
        }
        if(ground28.shapeColor == "blue"){
            p28color = "blue";
        }
        if(ground28.shapeColor == "yellow"){
            p28color = "yellow";
        }

        if(collide(player, ground27) && playerColor !== "red" && p27color == "red"){
            playerDeath = 1;
        }
        if(collide(player, ground27) && playerColor !== "blue" && p27color == "blue"){
            playerDeath = 1;
        }
        if(collide(player, ground27) && playerColor !== "yellow" && p27color == "yellow"){
            playerDeath = 1;
        }

        if(collide(player, ground28) && playerColor !== "red" && p28color == "red"){
            playerDeath = 1;
        }
        if(collide(player, ground28) && playerColor !== "blue" && p28color == "blue"){
            playerDeath = 1;
        }
        if(collide(player, ground28) && playerColor !== "yellow" && p28color == "yellow"){
            playerDeath = 1;
        }

        
    }
}