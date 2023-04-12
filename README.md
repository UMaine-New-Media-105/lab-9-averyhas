Lab Exercise Sketch #1: https://editor.p5js.org/averyhas/sketches/W65XrlwQP
Using a sprite of your own, make it bounce around the canvas using classes.

For this assignment, I chose to use my deadFish sprite, which I created for a previous assignment.
I began by creating my class, titling it DeadFish, and adding the constructor parameters:

```Javascript
class DeadFish {
  constructor(x, y, size, fishColor, speedX, speedY){
    this.x = x;
    this.y = y;
    this.size = size;
    this.fishColor = fishColor;
    this.speedX = speedX;
    this.speedY = speedY;
  }
```

This set the parameters according to class. I then went on to create my show section, which holds the instructions to draw the sprite itself:

```Javascript
  show(){
    push();
    translate(this.x, this.y);
    scale(this.size);

    fill("papayawhip");
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
```
  
Next, I created the move section of my class. To do this, I added if statements to ensure that the sprite would bounce randomly around the canvas using speedX + speedY, however without passing a certain point on the screen (so that the sprite is always visible).

```Javascript
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
```

After creating the class, I "called" it within setup(), setting the parameters for the sprite.

```Javascript
  deadFish1 = new DeadFish(50, 50, 0.25, "papayawhip", random(2, 4), random(2, 4));
}
```

and used ```deadFish1.move``` and ```deadFish1.show``` within draw to ensure that the show + move instructions from the class would be implemented.


Lab Exercise Sketch #2: https://editor.p5js.org/averyhas/sketches/OvSBRJoHT
Create 50 sprites that are randomly bouncing off the walls.

Using the foundation of my previous sketch, I used arrays & for loops to create 50 of my sprite and have them bounce at random across my canvas.

I started by creating an array ```fish = [];``` in setup, and then adding my first for loop:

```Javascript
  for (let fishDrawn = 0; fishDrawn < 50; fishDrawn++) {
```

Within this loop, I created three variables to use when calling the DeadFish class:

```Javascript
    let thisX = random(width);
    let thisY = random(height);
    let thisColor = random(360);
```

and re-wrote my previous code to incorporate my new loop and variables:

```Javascript
    fish[fishDrawn] = new DeadFish(thisX, thisY, 0.25, thisColor, random(2, 4), random(2, 4));
```

Then, within draw, I created my second loop, and once again used ```fish[fishDrawn].move``` & ```fish[fishDrawn].show``` to ensure that the show + move instructions from the class would be implemented.
