let system;
let system2;
let system3;
let blackhole;
let whitehole;
let m = 0.5;
function setup() {
  createCanvas(720, 400);
  system = new ParticleSystem(createVector(width-200, 50));
  system2 = new ParticleSystem(createVector(200, 50));
  system3 = new ParticleSystem(createVector(width/2, 50));
  blackhole = new Blackhole();
  whitehole = new Whitehole();

}

function draw() {
  background(51);
  system.addParticle();
  system.run();
  system2.addParticle();
  system2.run();
  system3.addParticle();
  system3.run();
  blackhole.show();
  blackhole.extinction();
  whitehole.see();
  whitehole.extinction();
 
}

function mousePressed() {
  if (random() < m&& whitehole.a == 0) {
  blackhole.a = 1;
  } else if (random() > m && blackhole.a == 0){
  whitehole.a = 1;
  }
}