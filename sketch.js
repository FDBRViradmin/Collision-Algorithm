var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400, 200, 80, 30);
  fixedRect=createSprite(400, 200, 50, 80);
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
  movingRect.debug=true;
  fixedRect.debug=true;
}

function draw() {
  background(0);
  movingRect.x=mouseX
  movingRect.y=mouseY  
  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && 
    movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 && 
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
  } else{
   movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
  }
  drawSprites();
}