var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var paper,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	paper = loadImage("sprites/paper.png");	
	ground = loadImage("sprites/dustbingreen.png");
}

var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	dencity:1.2

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = createSprite(100,350,20,20)
	paper = addImage("sprites/papaer.png");
	
	
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	paper = Bodies.circle(width/2,200,5,{restitution:1.5,isStatic:false});
	//World.add(world, packageBody);
	World.add(world,paper);
	
	

	//Create a Ground
	ground = createSprite(650,400,200,20);
	ground = loadImage("sprites/dustbingreen.png");
	
	
	

	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	ground = Bodies.rectangle(width/2,650,width,10,{isStatic:true});
 	//World.add(world, ground);
	World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}



