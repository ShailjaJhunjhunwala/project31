var ball,plinko,plinko1,paddle,paddle1,paddle2,paddle3,paddle4,paddle5,paddle6,paddle7,paddle8,paddle9;
function setup() {
  createCanvas(800,650);
  paddle = createSprite(400,645,800,10)
  paddle1 = createSprite(05,500,10,300)
  paddle2 = createSprite(100,500,10,300)
  paddle3 = createSprite(200,500,10,300)
  paddle4 = createSprite(300,500,10,300)
  paddle5 = createSprite(400,500,10,300)
  paddle6 = createSprite(500,500,10,300)
  paddle7 = createSprite(600,500,10,300)
  paddle8 = createSprite(700,500,10,300)
  paddle9 = createSprite(795,500,10,300)
}

function draw() {
  background(0); 
  for(var i = 50; i < 750; i=i+50) { 
    var plinko = createSprite(i,200,20,20)
    plinko.shapeColor = "white"
   } 
   for(var i = 20; i < 780; i=i+50) { 
    var plinko1 = createSprite(i,250,20,20)
    plinko1.shapeColor = "white"
   }
  spawnBall();
  drawSprites();
}
function spawnBall(){
  if (frameCount % 30 === 0) {
   var ball = createSprite(0,0,20,20)
   var rand = Math.round(random(1,5));
   switch(rand){
    case 1: ball.x= 390;
    break;
    case 2: ball.x= 495;
    break;
    case 3: ball.x= 400;
    break;
    case 4: ball.x= 405;
    break;
    case 5: ball.x= 410;
    break;
   }
   ball.bounceOff(paddle)
   ball.bounceOff(paddle1)
   ball.bounceOff(paddle2)
   ball.bounceOff(paddle3)
   ball.bounceOff(paddle4)
   ball.bounceOff(paddle5)
   ball.bounceOff(paddle6)
   ball.bounceOff(paddle7)
   ball.bounceOff(paddle8)
   ball.bounceOff(paddle9)
    var rand = Math.round(random(1,4));
    switch(rand){
      case 1: ball.shapeColor = "red";
      break;
      case 2: ball.shapeColor = "blue";
      break;
      case 3: ball.shapeColor = "green";
      break;
      case 4: ball.shapeColor = "yellow";
      break;
    }
    ball.scale = 0.5;
    ball.velocityY = 3
  }
 }