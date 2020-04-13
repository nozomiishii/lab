function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

const animalIcons = ["🐘", "🦕", "🦩", "🐆", "🐏", "🦚"];
const animals = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

let green = 150;
function draw() {
  background(0, green, 0);
  for (animal of animals) {
    animal.show();
  }
}

function mousePressed() {
  green !== 0 ? (green -= 10) : 0;
  let randomNum = Math.floor(Math.random() * animalIcons.length);
  let icon = animalIcons[randomNum];
  animals.push(new Animal(icon, mouseX, mouseY));
}
