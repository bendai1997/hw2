
function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(220,220,220);
  noStroke();
  strokeCap(SQUARE);
  
  //red square
  fill(255,0,0);
  rect(mouseX,0,400-mouseX,mouseY);
  //blue square
  fill(0,0,255);
  rect(0,mouseY,mouseX,400-mouseY);
  //yellow rectangle
  fill(255,255,0);
  rect(370,360,30,40);
  
  //left
  stroke(0);
  strokeWeight(13);
  line(mouseX,0,mouseX,400);
  
  line(0,mouseY,400,mouseY);//middle
  
  line(370,mouseY,370,400);//bottom
  
  strokeWeight(15);
  line(370,360,400,360);
  
  strokeWeight(20);
  line(0,160,mouseX,160);
}
