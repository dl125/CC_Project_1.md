var pacmanx = 0; // x location where pacman moves from
var pacmany = 100; // y location where pacman moves from
var Pokeballbutton = (255); // click smaller circle on pokeball and background changes color
var spotlightX = 450; //x point of spotlight
var spotlightY = 300; // y point of spotlight
var pokeX = 100; // x point of pokeball
var pokeY = 100; //y point of pokeball
var angle = 0; // angle for pokeball when rotating

function setup() {
  createCanvas(600, 600); // how big canvas is

}

function draw() {
  
  background(Pokeballbutton);

//rainbow
  fill(255, 0, 0);//red
  arc(300, 550, 300, 300, 575, radians(0));

  fill(255, 158, 13);//orange
  arc(300, 550, 250, 250, 575, radians(0));

  fill(240, 255, 0);//yellow
  arc(300, 550, 200, 200, 575, radians(0));

  fill(23, 255, 10);//green
  arc(300, 550, 150, 150, 575, radians(0));

  fill(26, 12, 232);//blue
  arc(300, 550, 100, 100, 575, radians(0));

  fill(228, 0, 255);//purple
  arc(300, 550, 50, 50, 575, radians(0));


  //pokeball
  push();
  translate(pokeX, pokeY); // where pokeball is being translated to
  rotate(angle); //pokeball is being rotated
  //scale(pokescale);
  drawpokeball();
  pop();
  pokeX = 100 + 100 * sin(frameCount / 100); //small white circle has a max x amplitude of 200
 

  angle += 1 / (8 * PI); //rotates with an angle

  //Spotlight of moveable triangle
  fill(255, 255, 0);// yellow fill
  triangle(spotlightX, spotlightY, 100, 100, 150, 175); // location of spotlight

  if (keyIsPressed) { // controls for spotlight
    if (keyCode == UP_ARROW) { //up
      spotlightY -= 5;
    } else if (keyCode == DOWN_ARROW) { // down
      spotlightY += 5;
    } else if (keyCode == LEFT_ARROW) { //left
      spotlightX -= 5;
    } else if (keyCode == RIGHT_ARROW) { //right
      spotlightX += 5;

    }
  }



  //Playstation buttons
  for (var i = 0; i < 6; i++) { //PS buttons 
    drawPlaystation(50 + (i * 200), 550 - (i * 200));// creates 3 sets of PS buttons
  }
  drawPlaystation(mouseX, mouseY); // playstation buttons follow wherever my mouse is



  //Zelda Triforce Symbol
  drawtriangles();

  //Pacman moves on the screen
  pacmanx = move(pacmanx);
  pacmany = move(pacmany);
  drawPacman(pacmanx, pacmany);


}

function drawPacman(x, y) {
  fill(255, 239, 0); // fill color of ellipse is yellow
  arc(x, y, 55, 55, 0, radians(320)); // dimentions of circle
  fill(0); // eye is black for pacman
  ellipse(x - 10, y - 10, 10, 10); // location of pacman's eye
}


function drawpokeball() {
  fill(255, 0, 0)// draws red circle
  stroke(0);
  ellipse(0, 0, 300, 300);

  fill(255); // draws white arc
  arc(0, 0, 300, 300, 0, radians(180));

  fill(0); // draws black rectangle
  rect(-150, -30, 300, 50)

  fill(0); // draws black circle
  ellipse(0, 0, 80, 80);

  fill(255); // draws white circle and when pressed changes the background from black to white
  ellipse((width / 3) - 200, (height / 3) - 200, 50, 50)
  var d = dist((width / 3) - 200 + pokeX, (height / 3) - 200 + pokeY, mouseX, mouseY);
  if (d < 25 && mouseIsPressed) {
    Pokeballbutton = 255;
  } else {
    Pokeballbutton = (0);
  }
}

function drawtriangles() { // Zelda Triforce Symbol with a fill of yellow
  fill(255, 248, 13);
  triangle(400, 350, 350, 450, 450, 450);
  fill(255, 248, 13);
  triangle(450, 450, 500, 350, 550, 450);
  fill(255, 248, 13);
  triangle(400, 350, 500, 350, 450, 250);
}

function drawPlaystation(x, y) {
  stroke(118, 175, 255); // draws first line for x button
  line(x + 50, y, x, y + 50);

  stroke(118, 175, 255); // draws second line for x button
  line(x, y, x + 50, y + 50);

  stroke(232, 140, 228); // draws square for button
  fill(0);
  rect(x - 50, y - 50, 50, 50);


  stroke(26, 255, 190); // draws triangle button
  triangle(x, y - 50, x + 50, y - 50, x + 25, y - 100);

  stroke(255, 0, 0); // draws circle button
  ellipse(x + 80, y - 25, 55, 55);
}

function move(characterx) {
  characterx += random(-6, 6); // random speed between -6 and 6 is selected when the run button is pressed

  if (characterx > width) { // when pacmanx reaches the end of the canvas width, x returns to 0
    characterx = 0;
  }
  return characterx;
}