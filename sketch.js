//creating variables
var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1250,400);
  //assigning random values
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
 bullet= createSprite(50, 200, 30, 10);
 bullet.shapeColor="white";
 wall=createSprite(1170,200,thickness,height/2);
 wall.shapeColor=(80,80,80);
}

function draw() {
  background("blue");  
  bullet.velocityX=speed;
  //determining when the bullet should stop
  if(wall.x-bullet.x<(bullet.width+thickness)/2){
    bullet.velocityX=0;
    //calculating damage
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      bullet.shapeColor="red";
      wall.shapeColor="red";
    }
    
    if(damage<10){
      bullet.shapeColor="green";
      wall.shapeColor="green";
    }
  
  
  }
  drawSprites();
}