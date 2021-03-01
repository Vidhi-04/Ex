const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var b1, b2, b3, b4, b5, b6, b7, b8, b9;

function setup() {

  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  //bottom layer
  b1 = new box(330, 235, 30, 40)
  b2 = new box(360, 235, 30, 40)
  b3 = new box(390, 235, 30, 40)
  b4 = new box(420, 235, 30, 40)
  b5 = new box(450, 235, 30, 40)
  //middle layer
  b6 = new box(360, 195, 30, 40)
  b7 = new box(390, 195, 30, 40)
  b8 = new box(420, 195, 30, 40)
  //top layer
  b9 = new box(390, 155, 30, 40)
  Engine.run(engine);
}

function draw() {
  background(0);  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
}