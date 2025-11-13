let system;
let blackhole;
let whitehole;
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
  whitehole.see();
 
}

