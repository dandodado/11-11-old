class ParticleSystem {
  constructor(position) {
    this.origin = position.copy();
    this.particles = [];
  }

  addParticle() {
    this.particles.push(new Particle(this.origin));
  }

  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];
      p.run();
      let gravity = createVector(0, 0.8);
      p.addForce(gravity);
      
      if (p.position.dist(blackhole.position) < blackhole.mass){
      p.small();
       let attrater = blackhole.calculateAttraction(p);
      p.addForce(attrater);
      }
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }

}

