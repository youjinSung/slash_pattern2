function setup() {
  createCanvas(1000, 1000);
  background(255);
}

function draw() {
  randomSeed(67);
  background(255);
  var x, y;
  var delta = map(mouseX, 0, windowWidth, 50, 100);
  var colour = map(mouseY, 0, windowHeight, 10, 30);
  for (y=0; y<windowHeight; y+= delta) {
    for (x=0; x<windowWidth; x+= delta) {
      var r = random(0, 1);
      strokeWeight(3);
      stroke(0);
      if (r>0.5) {
        strokeWeight(colour);
        stroke(200, 0, 255, 188);
        line(x, y, x+delta, y+delta);
      } else {  

        line(x+delta, y, x, y+delta);
      }
    }
  }
}
