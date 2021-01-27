var player;
var computer;
var ball;
var gameState=0;
var goalimage1;

function preload (){
goalimage1=loadImage('g1.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 player=createSprite(windowWidth/2-380,windowHeight/2,23,80);
 computer=createSprite(windowWidth/2+400,windowHeight/2,23,80);
 ball=createSprite(windowWidth/2,windowHeight/2,15,15,);
}

function draw() {
  background('green');  
  drawSprites();
  image(goalimage1,windowWidth/2-500,windowHeight/2-100,90,350)
  if(gameState===0){
  textSize(20);
  fill ('red');
  text ('Press space key to start the game',windowWidth/2-135,windowHeight/2-50);


  }

  if (keyIsDown(32)){
  gameState=1;
  ball.velocityX=3;
  ball.velocityY=2;


  }
}