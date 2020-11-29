
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world, paper, ground, box1, box2, box3, paper2Img, paper2, dustbinImg, dustbin;

function preload(){
  dustbinImg = loadImage("dustbin.png")
}

function setup() {
	createCanvas(800, 500);
    engine = Engine.create();
	  world = engine.world;
    dustbin = createSprite(589, 405, 10, 10);
    dustbin.addImage(dustbinImg);
    dustbin.scale = 0.5
    dustbin.depth = 3;
    paper = new Paper(50, 460, 30)
    ground = new Ground(400, 490, 800, 20, {isStatic: true})
    box1 = new Box(589, 476, 127, 10);
    box2 = new Box(530, 402, 10, 158);
    box3 = new Box(648, 402, 10, 158);

    
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("black");

  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body, paper.body.position,{x:23, y:-55});
  }
}


