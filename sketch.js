let system;
let blackhole;
let whitehole;
let m = 0.5;
function setup() {
  createCanvas(720, 400);
  system = new ParticleSystem(createVector(width / 2, 50));
  blackhole = new Blackhole();
  whitehole = new Whitehole();

}

function draw() {
  background(51);
  system.addParticle();
  system.run();
  blackhole.show();
  blackhole.extinction();
  whitehole.see();
  whitehole.extinction();
 
}

function mousePressed() {
  if (random() < m) {
  blackhole.a = 1;
  } else {
  whitehole.a = 1;
  }
}