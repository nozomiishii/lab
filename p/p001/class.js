class Animal {
  constructor(icon, x, y) {
    this.icon = icon;
    this.x = x;
    this.y = y;
    this.angle = 0.1;
    this.size = random(40, 120);
  }
  show() {
    push();
    // frameRate(6);
    textSize(this.size);
    translate(this.x, this.y);
    rotate(this.angle);
    textAlign(CENTER);
    text(this.icon, 0, 0);
    this.angle += 0.01;
    pop();
  }
}
