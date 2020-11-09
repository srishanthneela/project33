const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var particles = [];
var plinkos = [];
var divisions = [];

var count = 0;

var divisionHeight=300;
var score =0;
var particle;
var turn = 0;
var gamestate = "play";

function setup() {
  createCanvas(700, 950);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
      plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
    }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,275));
    }
     for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,375));
    }  
}
 


function draw() {
  background("gold");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  text("500",20,700);
  text("500",100,700);
  text("500",180,700);
  text("500",260,700);
  text("100",340,700);
  text("100",420,700);
  text("100",500,700);
  text("200",580,700);
  text("200",660,700);
  text("200",740,700);

  if (gamestate==="end") {
    textSize(100);
    text("Game Over!", 100, 250)
  }
  ground.display();
  for (var k = 0; k < divisions.length; k++) {
   divisions[k].display();
  }

   if (particle!=null) {
     particle.display();
     if(particle.body.position.y>900){
      if (particle.body.position.x<300) {
        score = score+500;
        particle = null;
        if (count>=5) {
          gamestate = "end"
        }
      }
     }
   }

   if (particle!=null) {
    particle.display();
    if(particle.body.position.y>900){
     if (particle.body.position.x>301&&particle.body.position.x<600) {
       score = score+100;
       particle = null;
       if (count>=5) {
         gamestate = "end"
       }
     }
    }
  }

  if (particle!=null) {
    particle.display();
    if(particle.body.position.y>900){
     if (particle.body.position.x>601&&particle.body.position.x<900) {
       score = score+200;
       particle = null;
       if (count>=5) {
         gamestate = "end"
       }
     }
    }
  }
}

function mousePressed(){
  console.log("hi")
  if(gamestate!=="end"){
    count++;
    particle = new Particle(mouseX, 10, 10, 10)
  }
}