function setup() {
  createCanvas(500, 500);
  background(0); // Set background to black
  noLoop(); // Prevent continuous drawing

  const triangles = [
    [{x: 100, y: 150}, {x: 250, y: 250}, {x: 100, y: 350}],
    [{x: 400, y: 150}, {x: 250, y: 250}, {x: 400, y: 350}],
    [{x: 250, y: 250}, {x: 100, y: 350}, {x: 250, y: 450}],
    [{x: 250, y: 250}, {x: 400, y: 350}, {x: 250, y: 450}],
    [{x: 175, y: 200}, {x: 250, y: 250}, {x: 325, y: 200}],
    [{x: 175, y: 200}, {x: 250, y: 250}, {x: 150, y: 300}],
    [{x: 325, y: 200}, {x: 250, y: 250}, {x: 350, y: 300}],
    [{x: 175, y: 300}, {x: 250, y: 250}, {x: 325, y: 300}],
  ];

  const rhombuses = [
    [{x: 200, y: 100}, {x: 250, y: 150}, {x: 300, y: 100}, {x: 250, y: 50}],
    [{x: 200, y: 400}, {x: 250, y: 450}, {x: 300, y: 400}, {x: 250, y: 350}],
    [{x: 100, y: 250}, {x: 150, y: 300}, {x: 100, y: 350}, {x: 50, y: 300}],
    [{x: 400, y: 250}, {x: 450, y: 300}, {x: 400, y: 350}, {x: 350, y: 300}],
  ];

  triangles.forEach(triangle => drawPolygon(triangle, 'white'));
  rhombuses.forEach(rhombus => drawPolygon(rhombus, 'white'));
}

function drawPolygon(points, fillColor) {
  fill(fillColor);
  stroke(255); // Set stroke color to white
  beginShape();
  points.forEach(point => vertex(point.x, point.y));
  endShape(CLOSE);
}
