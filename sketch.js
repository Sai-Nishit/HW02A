function setup() {
  createCanvas(400, 400);
  background(150, 31, 20); 

  let centerX = width / 2;
  let centerY = height / 2;


  drawHalfCircle(centerX, centerY, 300, color(247, 234, 207), color(53, 122, 183)); 

 
  drawHalfCircle(centerX, centerY, 240, color(34, 34, 34), color(255, 198, 68)); 


  drawHalfCircle(centerX, centerY, 150, color(255, 98, 63), color(255, 98, 63)); 


  drawTriangle(centerX, centerY, 40, color(34, 34, 34)); 
}

function drawHalfCircle(x, y, diameter, leftColor, rightColor) {
  noStroke();
  

  fill(leftColor);
  arc(x, y, diameter, diameter, PI / 2, 3 * PI / 2, PIE);

  fill(rightColor);
  arc(x, y, diameter, diameter, -PI / 2, PI / 2, PIE);
}

function drawTriangle(x, y, size, triColor) {
  fill(triColor);
  noStroke();
  let h = size * sqrt(3) / 2;
  triangle(x, y - h / 2, x - size / 2, y + h / 2, x + size / 2, y + h / 2);
}
