var back
var backimage,backimage2
var ch;
var chImage;
var ground,groundImage;
var rock1
var rock1Image
var rock2
var rck2Image
var rockGroup;
var gameState="play"


function preload(){
backimage=loadImage("images/bg.jpg");
chImage=loadImage("images/ch.png");
rock1Image=loadImage("images/rockimg.png")
groundImage=loadImage("images/ground2.png")
rock2Image=loadImage("images/rock2img.png")
backimage2=loadImage("images/game over.jpg")
}




function setup(){
createCanvas(800,800);
  

ch = createSprite(100,400,10,10);
ch.addImage(chImage);
ch.scale=.5;
ch.setCollider("rectangle",0,0,100,250);
ground = createSprite(400,535,1000,10);
ground.visible=true;
ground.addImage(groundImage);
ground.scale=3

ch.debug=true;

rockGroup=new Group();
}


function draw(){
if(keyDown(UP_ARROW)) { 
   ch.velocityY=-15;
ground.velocityX= -5;

}
if(keyWentUp(UP_ARROW)){
   ch.velocityY=0;
   ch.velocityY=5;
}

ch.collide(ground);

if(ground.x<0){
   ground.x=400;
}


if(gameState==="play"){
   spawnObstacles();
  //back = createSprite(350,350,800,800);
  // back.addImage(backimage);
  // back.scale=2;
background(backimage);

}

if(ch.isTouching(rockGroup)){
   gameover();

}

drawSprites();

}


function spawnObstacles(){
if(frameCount%300===0){
   rock1 = createSprite(810,450);
   rock1.addImage(rock1Image);
   rock1.scale=.15;
   rock1.velocityX=-4;
   rockGroup.add(rock1)

}

if(frameCount%600===0){
   rock2 = createSprite(810,450);
   rock2.addImage(rock2Image);
   rock2.scale=.06;
   rock2.velocityX=-4;

   rockGroup.add(rock2)
}

}



function gameover(){

   
   rockGroup.visible=false;
   rockGroup.setVelocityXEach(0);
   rockGroup.destroyEach();
   ch.velocityX=0;
   ch.destroy();
   ground.velocityX=0;
   ground.visible=false;
      background(backimage2)
      gameState="over"

}