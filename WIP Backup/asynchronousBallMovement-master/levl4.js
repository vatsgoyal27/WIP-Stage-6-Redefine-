class levl4{
    constructor(){
    //missing: playerDeath    
    }
    display(){ 

        target.x = 570;
        target.y = 275;

        collide(player, ground11);

        ground1.x = 20000;
        ground2.x = 20000;
        ground3.x = 20000;

        ground4.x = 200000;
        ground5.x = 200000;
        ground6.x = 200000;

        ground7.x = 2000000;

        ground8.x = 2000000;
        ground9.x = 2000000;
        ground10.x = 2000000;     
        
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

        ground11.x = 300;
        ground11.y = 300;

        level1Teleport.y = 200000000000;
        level2Teleport.y = 200000000000;
        level3Teleport.y = 200000000000;
        level4Teleport.y = 200000000000;
        level5Teleport.y = 200000000000;
        level6Teleport.y = 200000000000;
        level7Teleport.y = 200000000000;
        level8Teleport.y = 200000000000;
        level9Teleport.y = 200000000000;

        if (keyDown("space") && player.y > 270){
            player.velocityY = -20;
        }
        
        if(gameState == 4){
        change = change + 1;
        rand = random(1, 100)
        }
        
        if(change % 50 == 0){
            if(rand >= 30){
                ground11.shapeColor = "red";
                
            }
            if(rand < 30){
                ground11.shapeColor = "yellow";
                
            }

        }

        if(ground11.shapeColor == "red"){
            p11color = "red";
        }
        if(ground11.shapeColor == "blue"){
            p11color = "blue";
        }
        if(ground11.shapeColor == "yellow"){
            p11color = "yellow";
        }

        if(collide(player, ground11) && playerColor !== "red" && p11color == "red"){
            playerDeath = 1;
        }
        if(collide(player, ground11) && playerColor !== "blue" && p11color == "blue"){
            playerDeath = 1;
        }
        if(collide(player, ground11) && playerColor !== "yellow" && p11color == "yellow"){
            playerDeath = 1;
        }

        
    }

}