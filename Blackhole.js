class Blackhole {
  constructor() {
    this.position = createVector(500, height-100);
    this.G = 10;
    this.mass = 120;
    this.a = 0;
  

}
   show() {
   if(this.a == 1){
    fill(150, 100,0,50);
    ellipse(this.position.x, this.position.y, this.mass+70, this.mass+70);
     fill(0);
    ellipse(this.position.x, this.position.y, this.mass/3, this.mass/3);
    noStroke();
   }
  }
 calculateAttraction(m) {
  if (this.a == 1){  
  let force = p5.Vector.sub(this.position, m.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 25);
    force.normalize();
    let strength = (this.G * this.mass * m.mass) / (distance * distance);
    force.mult(strength);
    return force;
  }
  }
  extinction() {
     if(this.a == 1){
    this.mass -= 2;
    }
   if(this.mass <0.1) {
    this.a = 0;
    this.mass = 120;
   }
  }

}