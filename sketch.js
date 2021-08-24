var sea,seaImg;
var ship,shipImg
function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png", "ship-3.png", "ship-4.png");
}

function setup()
{
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage("moving",seaImg);
  sea.scale=0.3;
 ship = createSprite(50,280);
 ship.addAnimation("moving",shipImg);
 ship.velocityX= 
 ship.scale = 0.2;
}

function draw() {
    background("blue");
    ship.velocityX= 3
     }
  drawSprites()
  if(ship.x < 0){
    ship.x = 
  }

