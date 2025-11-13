class Whitehole {
  constructor() {
    this.position = createVector(500, height/2-30);
    this.G = 3;
    this.mass = 120;
  
  

}
   see() {
   
    fill(0, 100,150,50);
    ellipse(this.position.x, this.position.y, this.mass+60, this.mass+60);
     fill(255);
    ellipse(this.position.x, this.position.y, this.mass/3, this.mass/3);
    noStroke();
  }
 calculateAttraction(m) {
    let force = p5.Vector.sub(m.position,this.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 25);
    force.normalize();
    let strength = (this.G * this.mass * m.mass) / (distance * distance);
    force.mult(strength);
    return force;
  }
}