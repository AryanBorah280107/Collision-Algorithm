var fixedRect, movingRect;
var rect1, rect2;

function setup()  {
  createCanvas(1000,1000);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(500,200,50,50);
  rect1.shapeColor = "green";

  rect2 = createSprite(600,200,50,50);
  rect2.shapeColor = "green";

}

function draw() {
  background("Brown");  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(fixedRect, movingRect)){
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";

  }
  else  {
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  }

  drawSprites();

}

