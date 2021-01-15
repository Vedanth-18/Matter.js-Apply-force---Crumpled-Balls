var bg;
var wood1, wood2, wood3;
var ground;
var trash;
var ball1, ball1Img, ball2, ball2Img, ball3, ball3Img;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
 bg = loadImage("bg.png");
 ball1Img = loadImage("ball1.png");
 ball2Img = loadImage("ball2.png");
 ball3Img = loadImage("ball3.png");
}

function setup() {
  createCanvas(1000,700);
  
	engine = Engine.create();
	world = engine.world;

  ball1 = createSprite(40, 80, 10,10);
  ball1.addImage("Ball1Img", ball1Img);
  ball1.scale=0.2;
  ball2 = createSprite(120, 80, 10,10);
  ball2.addImage("Ball2Img", ball2Img);
  ball2.scale=0.2;
  ball3 = createSprite(210, 80, 10,10);
  ball3.addImage("Ball3Img", ball3Img);
  ball3.scale=0.3;

  ground = new Ground();
	wood1 = new Wood(590, 600, 50, 160);
	wood2 = new Wood(890, 600, 50, 160);
  wood3 = new Wood(750, 650, 400, 80);
  trash = new Trash(200, 350, 20);

  ball= createSprite(trash.body.position.x, trash.body.position.y, 10,10);
  ball.addImage("default", ball2Img);
  ball.addImage("Ball1Img", ball1Img);
  ball.addImage("Ball3Img", ball3Img);
  ball.scale=0.3;

	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(bg);
  Engine.update(engine);
  wood1.display();
  wood2.display();
  wood3.display();
  properties();
  mousePressedFunction();
  keyPressed();
  //outOfScreen();
  drawSprites();
  fill("black");
  textSize(20);
  textStyle(BOLD);
  textFont("Verdana");
  text(".Press the left arrow and right arrow to move the ball", 10, 20);
  text("Choose an Item", 35, 150);
}
function keyPressed(){
  if(keyDown(RIGHT_ARROW)){
    Matter.Body.applyForce(trash.body, trash.body.position, {x: 8, y: -20});
  }
  if(keyDown(LEFT_ARROW)){
    Matter.Body.applyForce(trash.body, trash.body.position, {x: -8, y: -20});
  }
}
function properties(){
  ball.x = trash.body.position.x;
  ball.y= trash.body.position.y;
}
function mousePressedFunction(){
  if(mousePressedOver(ball1)){
    ball.changeImage("Ball1Img", ball1Img);
  }
  if(mousePressedOver(ball2)){
    ball.changeImage("default", ball2Img);
  }
  if(mousePressedOver(ball3)){
    ball.changeImage("Ball3Img", ball3Img);
  }
}
// function outOfScreen(){
//   if(ball.x<0 || ball.x>1000){
//     ball.x=200;
//     ball.y=350;
//   }
// }