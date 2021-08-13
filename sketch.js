var bgImg;
var sleepImg, brushImg, gym1Img, gym2Img, eatImg, drinkImg, moveImg, bathImg;
var astronaut;

function preload(){
  bgImg=loadImage("images/iss.png")
  sleepImg=loadImage("images/sleep.png")
  brushImg=loadImage("images/brush.png")

  gym1Img=loadAnimation("images/gym1.png","images/gym2.png")
  gym2Img=loadAnimation("images/gym11.png","images/gym12.png")
  eatImg=loadAnimation("images/eat1.png","images/eat2.png")
  drinkImg=loadAnimation("images/drink1.png","images/drink2.png")
  moveImg=loadAnimation("images/move.png","images/move1.png")
  bathImg=loadAnimation("images/bath1.png","images/bath2.png")
  
}

function setup() {
  createCanvas(600, 600);
  
  astronaut = createSprite(300,300);
  astronaut.addImage(sleepImg);
  astronaut.scale=0.1;
  
  
}

function draw() {
  background(bgImg);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brushImg);
    astronaut.changeAnimation("brushing")
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }


  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym1Img);
    astronaut.changeAnimation("gymming")
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bathImg);
    astronaut.changeAnimation("bathing")
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eatImg);
    astronaut.changeAnimation("eating")
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("moving",moveImg);
    astronaut.changeAnimation("moving")
    astronaut.velocityX=-2;
    astronaut.velocityY=0;
  }



  
  createEdgeSprites();
  drawSprites();
}