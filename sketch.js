
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1
  ground = createSprite(400,350,900,10)
  ground.velocityX = -3
 
  console.log(ground.x)
  banana= createSprite(350,50,10,10)
  banana.velocityX = -1
}



function draw() {
background("0")
  var Survivaltime=0
  stroke("white")
  textSize(20)
  fill("white")
  if (monkey.collide(ground)){
   
 if (keyDown("space")&&monkey.y>=150){
   monkey.velocityY =  monkey.velocityY- 17
 }
  }
monkey.velocityY = monkey.velocityY +0.8
  
  if(ground.x <0){
    ground.x = ground.width/2
  }
  monkey.collide(ground)
  
  stroke("black")
  textSize(20)
  fill("black")
  Survivaltime=Math.round(frameCount/frameRate())
  text("Survival Time:"+Survivaltime,100,50)
  console.log(Survivaltime)
  SpawnBanana();
  SpawnObstacle();
  drawSprites();
}

function SpawnBanana(){
 if (frameCount%80 === 0){
   banana = createSprite(350,350,10,10);
  banana.velocityX = -3;
   banana.y = Math.round(random(120,200));
   banana.addImage(bananaImage);
   banana.scale = 0.1;
   banana.lifetime = 150;
   FoodGroup.add(banana);
   
 }
}
function SpawnObstacle(){
 if (frameCount%300 === 0){
   obstacle = createSprite(350,ground.y,10,10);
  obstacle.velocityX = -3;
  obstacle.y = ground.y-20;
   obstacle.addImage(obstaceImage);
   obstacle.scale = 0.1;
   obstacle.lifetime = 150;
   obstacleGroup.add(obstacle);
   
 }}
