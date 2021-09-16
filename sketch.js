const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundImg; 
var tower,towerImg
var canon;

function preload() {
 backgroundImg = loadImage("background.gif")
 towerImg = loadImage("tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  ground= Matter.Bodies.rectangle(600,590,1200,10)
  World.add(world,ground); 

  var towerOptions = {isStatic : true 

  }
  tower=Matter.Bodies.rectangle(160,350,160,310,towerOptions)
  World.add(world,tower);

  canon = new Canon(200,20,130,100,20)

}

function draw() {
  background(backgroundImg);
 
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,1200,10);
   rectMode(CENTER)
   push()
   imageMode(CENTER);
   image(towerImg,tower.position.x,tower.position.y,160,310);
   pop()
   canon.display();
}
