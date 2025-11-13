class Blackhole {
  constructor() {
    this.position = createVector(230, height/2);
    this.G = 3;
    this.mass = 120;
  
  

}
   show() {
   
    fill(150, 100,0,50);
    ellipse(this.position.x, this.position.y, this.mass, this.mass);
     fill(0);
    ellipse(this.position.x, this.position.y, this.mass/3, this.mass/3);
    noStroke();
  }
 calculateAttraction(m) {
    let force = p5.Vector.sub(this.position, m.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 25);
    force.normalize();
    let strength = (this.G * this.mass * m.mass) / (distance * distance);
    force.mult(strength);
    return force;
  }

}