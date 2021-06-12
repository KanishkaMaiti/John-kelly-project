
var bath,sleep,brush,bgImage,gym,eat,drink,move;

var astronaut;

var bg;

var ins,insImage;



function preload()
{
  bgImage = loadImage("iss.png");
  bath = loadAnimation("bath1.png","bath2.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move.png","move1.png");
  insImage = loadImage("ins.png");
}

function setup() {
  createCanvas(400, 400);

  //score = 1;

  bg = createSprite(200,200,10,10);
  bg.addImage(bgImage);
  bg.scale = 0.12;
  
  astronaut = createSprite(200,200,50,50);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale =0.1;

  ins = createSprite(50,50,50,50);
  ins.addImage(insImage);
  ins.scale =0.7;
  
  //text("Score: "+ score, 500,40);
}

function draw() {
  background(220);

  //text("up arrow to brush,down arrow to gym,left arrow to eat,right arrow to bath",200,200);

  if(keyDown("UP_ARROW"))
  {
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW"))
  {
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW"))
  {
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW"))
  {
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  drawSprites();
}