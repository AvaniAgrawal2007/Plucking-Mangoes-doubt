
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20);
	trees = new Tree();
	mango1 = new Mangoes(540,350,25,25);
	mango2 = new Mangoes(580,355,22,22);
	mango3 = new Mangoes(620,340,29,29);
	mango4 = new Mangoes(660,356,22,21);
	mango5 = new Mangoes(520,390,24,26);
	mango6 = new Mangoes(560,380,20,19);
	mango7 = new Mangoes(600,385,27,30);
	mango8 = new Mangoes(640,400,28,25);
	mango9 = new Mangoes(680,395,25,23);
	mango10 = new Mangoes(720,380,24,20);
	mango11 = new Mangoes(470,430,25,25);
	mango12 = new Mangoes(510,440,22,22);
	mango13 = new Mangoes(550,445,29,29);
	mango14 = new Mangoes(590,436,22,21);
	mango15 = new Mangoes(630,432,24,26);
	mango16 = new Mangoes(670,449,20,19);
	mango17 = new Mangoes(710,435,27,30);
	mango18 = new Mangoes(740,447,28,25);
	mango19 = new Mangoes(565,415,25,23);
	mango20 = new Mangoes(520,470,24,20);
	boy = new BoyClass(200,620,130,270)
	stone = new Stone(155,555,40,40)
	elastic = new Elastic(stone.body,{x:155, y:555});
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  trees.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  mango16.display();
  mango17.display();
  mango18.display();
  mango19.display();
  mango20.display();
  boy.display();
  stone.display();
  elastic.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    elastic.fly();
}

