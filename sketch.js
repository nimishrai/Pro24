var box1,box2,box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
 var paper;
function setup() {
	createCanvas(1400, 400);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(34,139,34)

	box1Sprite=createSprite(1200,350,200,20);
	box1Sprite.shapeColor=color(139,69,19)
        box2Sprite=createSprite(1295,300,20,100);
	box2Sprite.shapeColor=color(139,69,19)
        box3Sprite=createSprite(1100,300,20,100);
	box3Sprite.shapeColor=color(139,69,19)


      paper = new Paper(100,315,10);
//Create a Ground
ground = Bodies.rectangle(width/2, 350, width, 10 , {isStatic:true} );
World.add(world, ground);



   box1 = Bodies.rectangle(1200,350,200,50, {isStatic:true} );
   World.add(world, box1);
   box2 = Bodies.rectangle(1295,310,20,100, {isStatic:true} );
   World.add(world, box2);
   box3 = Bodies.rectangle(1095,310,20,100, {isStatic:true} );
   World.add(world, box3);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
  
  
  paper.display();
  drawSprites();
}
function keyPressed(){
        if (keyCode === UP_ARROW) {
          Matter.Body.applyForce(paper.body, paper.body.position, {
            x: random(10,15),
            y: random(-10,-15)        });
        }
      }
 
