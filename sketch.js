var player;

var edges=[];

function preload(){
sansUP=loadAnimation("sprites/sansUP1.png","sprites/sansUP2.png","sprites/sansUP3.png","sprites/sansUP4.png");
sansDOWN=loadAnimation("sprites/sansDOWN1.png","sprites/sansDOWN2.png","sprites/sansDOWN3.png","sprites/sansDOWN4.png");
sansLEFT=loadAnimation("sprites/sansLEFT1.png","sprites/sansLEFT2.png","sprites/sansLEFT3.png","sprites/sansLEFT4.png");
sansRIGHT=loadAnimation("sprites/sansRIGHT1.png","sprites/sansRIGHT2.png","sprites/sansRIGHT3.png","sprites/sansRIGHT4.png");
sansIDLE=loadImage("sprites/sansIDLE.png");
sansDOWNIDLE=loadAnimation("sprites/sansDOWN1.png");
sansUPIDLE=loadAnimation("sprites/sansUP1.png");
sansLEFTIDLE=loadAnimation("sprites/sansLEFT1.png");
sansRIGHTIDLE=loadAnimation("sprites/sansRIGHT1.png");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-110);
  player =createSprite(250,250,50,50);
  player.addAnimation("sansIDLE",sansIDLE);
  player.addAnimation("sansUP",sansUP);
  player.addAnimation("sansDOWN",sansDOWN);
  player.addAnimation("sansLEFT",sansLEFT);
  player.addAnimation("sansRIGHT",sansRIGHT);
  player.addAnimation("sansDOWNIDLE",sansDOWNIDLE);
  player.addAnimation("sansUPIDLE",sansUPIDLE);
  player.addAnimation("sansLEFTIDLE",sansLEFTIDLE);
  player.addAnimation("sansRIGHTIDLE",sansRIGHTIDLE);
}

function draw() {
  background("white");  
  drawSprites();
  playerMovement();
  borderCreation();
}

function borderCreation(){

edges = createEdgeSprites();
if (player.isTouching(edges[2]) || player.isTouching(edges[3]) || player.isTouching(edges[1])|| player.isTouching(edges[0])) {
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]);
  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
}

}

function playerMovement(){

  if(keyDown("RIGHT_ARROW")){
    player.changeAnimation("sansRIGHT",sansRIGHT);
    player.velocityX=5
    player.velocityY=0
  }
  if(keyDown("LEFT_ARROW")){
    player.changeAnimation("sansLEFT",sansLEFT);
    player.velocityX=-5
    player.velocityY=0
  }
  if(keyDown("UP_ARROW")){
    player.changeAnimation("sansUP",sansUP);
    player.velocityX=0
    player.velocityY=-5
  }
  if(keyDown("DOWN_ARROW")){
    player.changeAnimation("sansDOWN",sansDOWN);
    player.velocityX=0
    player.velocityY=5
  }
  if(keyWentUp("RIGHT_ARROW")){
    player.velocityY=0
    player.velocityX=0
    player.changeAnimation("sansRIGHTIDLE",sansRIGHTIDLE);
  }
  if(keyWentUp("LEFT_ARROW")){
    player.velocityY=0
    player.velocityX=0
    player.changeAnimation("sansLEFTIDLE",sansLEFTIDLE);
  }
  if(keyWentUp("UP_ARROW")){
    player.velocityY=0
    player.velocityX=0
    player.changeAnimation("sansUPIDLE",sansUPIDLE);
  }
  if(keyWentUp("DOWN_ARROW")){
    player.velocityY=0
    player.velocityX=0
    player.changeAnimation("sansDOWNIDLE",sansDOWNIDLE);
  }
}