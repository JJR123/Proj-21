var bullet, wall; 
var speed, weight, thickness; 

thickness=Math.random(22,83); 
speed=Math.random(223,321); 
weight=Math.random(30,52) ;

function setup() {
  createCanvas(1600,400);
  //createSprite(400,200,50,50);
  bullet=createSprite(50,200,70,20);  
  wall=createSprite(1200,200,100,height/2);  
  
  bullet.velocityX=speed; 
  console.log(bullet); 
}

function draw() {
  background(0,0,0);   
  wall.shapeColor=color(80,80,80);    
  bullet.shapeColor="white";


  
  if(hasCollided(bullet,wall)) 
  { 
    bullet.velocityX=0; 
    var damage=0.5 * weight*speed*speed/(thickness*thickness*thickness); 

    if(damage>10) 
    { 
      wall.shapeColor=color(255,0,0);
    } 
    if(damage<10) 
    { 
      wall.shapeColor=color(0,255,0); 
    }
  
  }  



hasCollided();
  drawSprites();
} 

function hasCollided(Lbullet,Lwall) 
{ 
  bulletRightEdge=lbullet.x + lbullet.width; 
  wallLeftEdge=lwall.x; 
  if (bulletRightEdge>=wallLeftEdge) 
  { 
    return true
  } 
  return false;
}