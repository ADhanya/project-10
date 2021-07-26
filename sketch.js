
var seaImg,shipImg1;

var sea,ship;


function preload(){
  //upload the ship and sea animation.
seaImg=loadImage("sea.png");
shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  
  
   sea = createSprite(400,200)
  sea.addImage(seaImg)
  sea.VelocityX=-5;
  sea.scale=0.3
 
  ship = createSprite(130,200,30,30)
  ship.addAnimation("shipImg1",shipImg1);
  ship.scale = 0.25;
}

function draw() {
  background(0);
 sea.VelocityX= -3;





if (sea.x < 0) {
  sea.x=sea.width/8;
}




drawSprites();


}



