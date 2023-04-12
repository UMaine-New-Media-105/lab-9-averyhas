// Lab #9, pt2 - Avery Haskell

// Global variables setting speedX & speedY.

let speedX, speedY;

function setup() {
  createCanvas(400, 400);
  angleMode(RADIANS);
  
// Randomly set the x + y parameters, based on the width + height of the canvas.
  x = random(width);
  y = random(height);
  
  fish = [];
  
// Loop which draws 50 dead fish.
  for (let fishDrawn = 0; fishDrawn < 50; fishDrawn++) {
    let thisX = random(width);
    let thisY = random(height);
    let thisColor = random(360);
    
// Call the class/constructor & create parameters.
    fish[fishDrawn] = new DeadFish(thisX, thisY, 0.25, thisColor, random(2, 4), random(2, 4));
  }
}

function draw() {
  background("rebeccapurple");
  
  for (let fishDrawn = 0; fishDrawn < fish.length; fishDrawn++) {
    // Call both Show + Move for the sprite.
    fish[fishDrawn].show();
    fish[fishDrawn].move();
  }

}

class DeadFish {
// Set the parameters according to this class.
  constructor(x, y, size, fishColor, speedX, speedY){
    this.x = x;
    this.y = y;
    this.size = size;
    this.fishColor = fishColor;
    this.speedX = speedX;
    this.speedY = speedY;
  }
// Instructions to move the sprite.
  move(){
  this.x = this.x + this.speedX;
  this.y = this.y + this.speedY;
    
  if (this.x >= 350 || this.x <= 0) {
    this.speedX = this.speedX * -1;
  }
  if (this.y >= 350 || this.y <= 0) {
    this.speedY = this.speedY * -1;
  }
  }
// Instructions to draw the sprite.
  show(){
    push();
    translate(this.x, this.y);
    scale(this.size);

    fill(this.fishColor);
    noStroke();
    rect(100, 175, 250, 15);

    push();
    fill(this.fishColor)
    rotate(-89.55);
    translate(-185, 300);
    scale(1.5);
    arc(0, 0, 80, 80, 0, PI, CHORD);
    pop();

    rect(200, 105, 10, 150);
    rect(165, 120, 10, 125);
    rect(235, 120, 10, 125)
    rect(130, 135, 10, 90);
    rect(270, 135, 10, 90);

    triangle(50, 125, 115, 185, 75, 185)
    triangle(50, 240, 115, 185, 75, 185)
    pop();
  }
}
