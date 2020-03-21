/*

  Generates a visualization of the Barnsley Fern
  This version reminds me of the New Zealand Silver Fern
  https://en.wikipedia.org/wiki/Barnsley_fern

  Author: Michael J. Neumann
  https://www.michael-neumann.net

*/

// ***** SETUP AREA : start *****

const size = 1205;        // canvas size - defines the width, the height is 4/3 of this size
const maxPoints = 981979; // maximum number of points drawn

// ***** SETUP AREA : end *****

var v, c = 0;

function setup() {

  createCanvas(size, size * 4 / 3);
  strokeWeight(1.61803398875);
  stroke(235, 12.5);
  background(0);

  v = createVector(0, 0);

}

// draw the fern by iterating through the x & y coordinates
// see above Wikipedia link for more details on the algorithm

function draw() {

  for (var i=0; i<798; i++) {

    point(map(v.x, -2.182, 2.6558, width * 0.05, width * 0.95), map(v.y, 0, 9.9983, height * 0.95, height * 0.05));

    const r = random(1);

    if      (r < 0.01) { v = createVector( 0,                        0.16 * v.y                    ); }
    else if (r < 0.85) { v = createVector( 0.85 * v.x + 0.04 * v.y, -0.04 * v.x + 0.85 * v.y + 1.6 ); }
    else if (r < 0.93) { v = createVector( 0.2  * v.x - 0.26 * v.y,  0.23 * v.x + 0.22 * v.y + 1.6 ); }
    else               { v = createVector(-0.15 * v.x + 0.28 * v.y,  0.26 * v.x + 0.24 * v.y + 0.44); }

    c++;

  }

  if (c > maxPoints) { console.log("!"); noLoop(); }

}
