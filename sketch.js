var box1,box2;
function setup() {
  createCanvas(800,400);
  box1=createSprite(180,200,60,60);
  box2=createSprite(220,200,50,70);
  
}

function draw() {
  background(255,255,255); 
  box2.x=World.mouseX;
  box2.y=World.mouseY;
  console.log(box2.x-box1.x);
  if(box2.x-box1.x<box1.width/2 + box2.width/2  && box1.x-box2.x<box1.width/2 + box2.width/2  && 
    box1.y-box2.y<box1.height/2 + box2.height/2  && box2.y-box1.y<box1.height/2 + box2.height/2){
    box1.shapeColor="red";
    box2.shapeColor="red";
  } 
  else{
    box1.shapeColor="green";
    box2.shapeColor="green";
  }
  drawSprites();
}