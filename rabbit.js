
function setup() {
  createCanvas(500, 500);
  stroke(255, 200, 200);
}

function draw() {
   translate(mouseX-250, mouseY-150);
  

  
  background(255);
  fill(255, 200, 200); 
  ellipse(250, 150, 80, 80);
  fill(255, 200, 200);
  ellipse(225, 100, 30, 70);
  fill(255, 200, 200);
  ellipse(275, 100, 30, 70);
  fill(255, 200, 200);
  ellipse(250, 245, 90, 130);
  fill(255);
  ellipse(225, 100, 10, 50);
  ellipse(275, 100, 10, 50);
  arc(250, 250, 70, 90, 0, radians(180));
  ellipse(215, 310, 45, 25);
  ellipse(285, 310, 45, 25);
  fill(0);
  ellipse(230, 145, 10, 10);
  ellipse(270, 145, 10, 10);
  triangle(250, 165, 240, 155, 260, 155);
  fill(255, 200, 200);
  ellipse(290, 210, 60, 20);
  ellipse(210, 210, 60, 20);
  fill(255);
  ellipse(180, 210, 20, 25);
  ellipse(320, 210, 20, 25);
  fill(255,0,0);
  triangle(250, 190, 230, 180, 230, 200);
  triangle(250, 190, 270, 180, 270, 200);
  fill(255, 150, 150);
  ellipse(250, 190, 10, 10); 
}
