var divisions = []
var particles  =[]
var plinkos = []
var score = 0
var radius = 10
var ended = 0;
var count = 0;
var particle = null;
function setup() {
  engine = Matter.Engine.create()
  world = engine.world

  createCanvas(800,800);
  div1 = new Divisions(400, 750, 800, 100)
  //set up dem divisions gamers
  for (var div = 0; div < 9; div++) {
    divisions.push(new Divisions(div*100, 650, 20, 300))
  }
  divisions.push(new Divisions(0, 400, 5, 800))
  divisions.push(new Divisions(800, 400, 5, 800))
  //set up dem PLINKOOOOS
  for (var pliy = 0; pliy < 4; pliy++) {
    for (var plix = 20; plix < width; plix+=50) {
      plinkos.push(new Particle(plix, (pliy*100)+75, radius))
    }
  }
}
function draw() {
  background(0);
  Matter.Engine.update(engine);
  div1.display()
  for (var i = 0; i < divisions.length; i++) {
    divisions[i].display()
  }
  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display()
  }
  // for (var k = 0; k < particles.length; k++) {
  //   particles[k].display()
  // }
  for (var l = 0; l < particles.length; l++) {
    particles[l].display()
  }
  if (particle != null) {
    particle.display()
    if (particle.body.position.y>760) {
      if (particle.body.position.x < 300) {
        score +=500
        particles.push(particle)
        particle = null;
        if (count > 5) {
          ended = 1;
        } else if (particle.body.position.x > 300 && particle.body.position.x < 600) {
          score +=100
          particles.push(particle)
          particle = null;
          if (count > 5) {
            ended = 1;
          }
        } else if (particle.body.position.x > 600) {
          score +=200
          particles.push(particle)
          particle = null;
          if (count > 5) {
            ended = 1;
          }
        }
      }
    }
  }
  drawSprites();
  fill("white")
  text("Score: "+score, 50, 50)
}


function mousePressed() {
  if (ended==0) {
    count++;
    particle=new Particle(mouseX, 10, 11)
  }
}