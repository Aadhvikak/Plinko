var Engine = Matter.Engine;
var World= Matter.World;
var Events = Matter.Events;
var Bodies = Matter.Bodies;


var particles = [];
var plinkos = [];
var divisions = [];

var diviH = 300; 
var score = 0;

var divNew;
var plinko,plinko1,plinko2,plinko3;
var particle1;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world; 
  //createSprite(400, 200, 50, 50); 
  
  height = 800;
  width = 800;

  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <= width; k = k + 80) {
   divNew = new Division(k,height, 10, diviH);
   divisions.push(divNew);
  }

  for (var d = 75; d <= width; d = d + 50) {
    plinko = new Plinko(d, 75);
    plinkos.push(plinko);
  }

  for (var d = 50; d <= width - 10; d = d + 50) {
    plinko1 = new Plinko( d, 175);
    plinkos.push(plinko1);
  }

  for (var d = 75; d <= width; d = d + 50) {
    plinko2 = new Plinko( d, 275);
    plinkos.push(plinko2);
  }

  for (var d = 50; d <= width - 10; d = d + 50) {
    plinko3 = new Plinko( d, 375);
    plinkos.push(plinko3);
  }

}

function draw() {
  background("black");  
  
  textSize(20);
  text("Score : "+score,20,30);

  Engine.update(engine);

  ground.display();

  for (var d = 0; d < plinkos.length; d++) {
    plinkos[d].display();
  }

  if(frameCount%60===0){
    particle1 = new Particle(random(width/2-30, width/2+30), 10,10);
    particles.push(particle1);
  }
  
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

}

