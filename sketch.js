
var movingRect, fixedRect;

function setup() 
{
  createCanvas(1000,600);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true
  
  movingRect = createSprite(600, 200, 80, 30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true
}

function draw() 
{
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect,fixedRect))
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else
  {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }

  drawSprites();
}
