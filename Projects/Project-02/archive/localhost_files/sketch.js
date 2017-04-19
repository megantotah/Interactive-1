
var GRAVITY = .3;
var FLAP = -7;
var gameOver;
var pastabirdimg;
var pastabird

function setup() {

  
  createCanvas(windowWidth, windowHeight);
  background(244,134,131);
  noStroke();
  fill(247,166,166);
  ellipse(windowWidth/4,windowHeight-100,400,400);
  ellipse(3*windowWidth/4,windowHeight-80,200,200);
  ellipse(windowWidth/2,windowHeight-80,200,200);
  pastabirdimg= loadImage("assets/PastaFlappyBird.png");

  pastabird = createSprite(width/2, height/2, 10,10);
  //pastabird.rotateToDirection = true;
  pastabird.velocity.x = 4;
  //pastabird.setCollider("circle", 0,0,20);
  pastabird.addImage(pastabirdimg);

 gameOver = true;
 updateSprites(false);

}



function draw() {
   //background(244,134,131);
if(!gameOver) {

    if(keyWentDown("x"))
      bird.velocity.y = FLAP;
    
    bird.velocity.y += GRAVITY;
    
    if(bird.position.y<0)
      bird.position.y = 0;
  }
 drawSprite(pastabird);

}

function mousePressed() {
  if(gameOver)
    newGame();
  bird.velocity.y = FLAP;
}

function newGame() {
  pipes.removeSprites();
  gameOver = false;
  updateSprites(true);
  bird.position.x = width/2;
  bird.position.y = height/2;
  bird.velocity.y = 0;
  ground.position.x = 800/2;
  ground.position.y = GROUND_Y+100;
}

/*
 if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
  */