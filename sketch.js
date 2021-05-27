var helicopterIMG, helicopterSprite, packageSprite,packageIMG,gameState = "play", screen;
var packageBody,ground,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(50, 200, 30,30);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(50, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	/*groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);*/

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(50 , 200 , 30 , 30,{restitution:1.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	/*ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);*/

	box1 = Bodies.rectangle(278, 600, 30, 200, {isStatic:true});
	World.add(world, box1);

	box2 = Bodies.rectangle(462, 600, 30, 200, {isStatic:true});
	World.add(world, box2);

	box3 = Bodies.rectangle(370, 650, 400, 50, {isStatic:true});
	World.add(world, box3);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
	if (helicopterSprite.x>280 && helicopterSprite.x<460){
	fill("White")
	textSize(22);
	text("Press Down Arrow!!", 270, 400)
	}
	if (keyCode === RIGHT_ARROW){
		helicopterSprite.x = helicopterSprite.x+5
	}
	if (keyCode === LEFT_ARROW){
		helicopterSprite.x = helicopterSprite.x-5
	}
	if (helicopterSprite.y>50){
	packageSprite.x = helicopterSprite.x
	packageBody.position.x = helicopterSprite.x
	}
	if (packageBody.position.y>800){
	fill("white")
	textSize(35);
	text("Game Over", 300,300);
	}
fill("red")
rect(box1.position.x, box1.position.y, 30, 200);
rect(box2.position.x, box2.position.y, 30, 200);
rect(box3.position.x, box3.position.y, 400, 50);
fill("white")
textSize(20);
text("Press Right Arrow to move Right", 500, 350);
text("Press Left Arrow to move Left", 5, 350);
console.log(packageBody);
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);
	gameState = "end";
 }

  if (gameState == "end"){
	helicopterSprite.velocityY = -4;
	}
}



