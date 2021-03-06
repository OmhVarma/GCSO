var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);
  
  speed = random(55,90);
  weight = random(400,1500);
  thickness= random(20, 90);

  bullet.velocityX = speed;

  wall = createSprite(1500,200,thickness, height/2);
}

function draw() {
  background(255);  
  drawSprites();

if(wall.x - bullet.x < (bullet.width + wall.width) /2) 
{
 bullet.velocityX = 0;
 var damage = 0.5* weight* speed* speed/(thickness* thickness* thickness)
 if(damage < 10)
 {
  bullet.shapeColor = "green"
 }
 if(damage > 10)
 {
  bullet.shapeColor = "red"
 }
}

}
