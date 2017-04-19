
var GRAVITY = .3;
var FLAP = -7;
var gameOver;
var pastabirdimg;
var pastabird;
var GROUND_Y = 450;
var MIN_OPENING = 300;
var pastabird, ground;
var pipes;

function setup() {

  pastabirdimg= loadImage("assets/PastaFlappyBird.png");
  pipeImg = loadImage("assets/pipe.png");
  groundImg = loadImage("assets/ground.png");

  pastabird = createSprite(width/2, height/2, 10,10);
  //pastabird.rotateToDirection = true;
  pastabird.velocity.x = 4;
  //pastabird.setCollider("circle", 0,0,20);

  pastabird.addImage(pastabirdimg);
  pipe.addImage(pipe.png);
  ground.addImage(ground.png);


  ground = createSprite(800/2, GROUND_Y+100); //image 800x200
  ground.addImage(groundImg);


  pipes = new Group();
  gameOver = true;
  updateSprites(false);

  /*camera.position.y = height/2;*/


}



function draw() {
   //background(244,134,131);
if(!gameOver) {

    if(keyWentDown("x"))
      pastabird.velocity.y = FLAP;
    
      pastabird.velocity.y += GRAVITY;
    
    if(pastabird.position.y<0)
      pastabird.position.y = 0;

    if(pastabird.position.y+bird.height/2 > GROUND_Y)
      die();

    if(pastabird.overlap(pipes))
      die();

    //spawn pipes
    if(frameCount%60 == 0) {
      var pipeH = random(50, 300);
      var pipe = createSprite(bird.position.x + width, GROUND_Y-pipeH/2+1+100, 80, pipeH);
      pipe.addImage(pipeImg);
      pipes.add(pipe);

      //top pipe
      if(pipeH<200) {
        pipeH = height - (height-GROUND_Y)-(pipeH+MIN_OPENING);
        pipe = createSprite(bird.position.x + width, pipeH/2-100, 80, pipeH);
        pipe.mirrorY(-1);
        pipe.addImage(pipeImg);
        pipes.add(pipe);
      }
    }
  
 drawSprite(pastabird);

}

//get rid of passed pipes
    for(var i = 0; i<pipes.length; i++)
      if(pipes[i].position.x < bird.position.x-width/2)
        pipes[i].remove();
  }

  *camera.position.x = bird.position.x + width/4;

//wrap ground
  if(camera.position.x > ground.position.x-ground.width+width/2)
    //ground.position.x+=ground.width;

  background(247, 134, 131); 
  /*camera.off();*/
  image(bgImg, 0, GROUND_Y-190);
  /*camera.on();*/

  drawSprites(pipes);
  drawSprite(ground);
  drawSprite(pastabird);


function die() {
  updateSprites(false);
  gameOver = true;   
}

function newGame() {
  pipes.removeSprites();
  gameOver = false;
  updateSprites(true);
  pastabird.position.x = width/2;
  pastabird.position.y = height/2;
  pastabird.velocity.y = 0;
  ground.position.x = 800/2;
  ground.position.y = GROUND_Y+100;
}


function mousePressed() {
  if(gameOver)
    newGame();
  pastabird.velocity.y = FLAP;
}

function newGame() {
  //pipes.removeSprites();
  gameOver = false;
  updateSprites(true);
  pastabird.position.x = width/2;
  pastabird.position.y = height/2;
  pastabird.velocity.y = 0;
  //ground.position.x = 800/2;
  //ground.position.y = GROUND_Y+100;
}

/*
 if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
  */