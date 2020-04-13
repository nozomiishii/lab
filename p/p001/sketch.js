function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

const animalIcons = ["🐘", "🦕", "🦩", "🐆", "🐏", "🦚"];
const animals = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

let green = 240;
function draw() {
  background(0, green, 0);
  for (animal of animals) {
    animal.show();
  }
  textAlign(CENTER);
  green > 10 ? fill(0, green, 0) : fill(255);

  textSize(180);
  text("animal", windowWidth / 2, windowHeight / 2);
}

function mousePressed() {
  green > 10 ? (green -= 10) : 10;
  let randomNum = Math.floor(Math.random() * animalIcons.length);
  let icon = animalIcons[randomNum];
  animals.push(new Animal(icon, mouseX, mouseY));
}
