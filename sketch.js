const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var object;
var ground;


function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var objectoption={
isStatic:false,
restitution:1,
friction:0.8,
density:0.5
  }
  object=Bodies.rectangle(200,100,50,50,objectoption);
  World.add(world,object)
  var groundoption={
    isStatic:true
  }
  ground=Bodies.rectangle(200,380,400,20,groundoption);
  World.add(world,ground)
}

function draw() {
  background("red"); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(200,200,50,50)
  rect(object.position.x,object.position.y,20,20);
  rect(ground.position.x,ground.position.y,400,20);
}