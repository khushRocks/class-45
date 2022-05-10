var playerIMG,shooter2,shooter3,backgroundIMG
var player
var zombie
var zombieIMG



function preload(){
playerIMG = loadImage("assets/shooter_1.png");
shooter2 = loadImage("assets/shooter_2.png");
shooter3 = loadImage("assets/shooter_3.png");
backgroundIMG =loadImage("assets/bg.jpeg"); 
zombieIMG = loadImage("assets/zombie.png");
}

function setup(){
createCanvas(windowWidth,windowHeight);

player = createSprite(windowWidth-1150,windowHeight-300,50,50);
player.addImage(playerIMG);
player.scale = 0.3;
player.debug = true;

zombie = createSprite(1000,500,50,50);
zombie.addImage(zombieIMG);
zombie.scale = 0.2
}

function draw(){
//background(backgroundIMG)
image(backgroundIMG,0,0,windowWidth,windowHeight);

//move the player up and down
if(keyDown("UP_ARROW")&& player.y > 0 ){
  player.y = player.y-10

}

if(keyDown("DOWN_ARROW")&& player.y < windowHeight){
  player.y = player.y+10
}

if(keyDown("RIGHT_ARROW")){
  player.x = player.x+10
}

if(keyDown("LEFT_ARROW")){
  player.x = player.x-10
}

//shooter shooting on pressing space
if(keyWentDown("space")){
  player.addImage(shooter3)
}if(keyWentUp("space")){
  player.addImage(playerIMG)
}

drawSprites();
}