// p5 sketch template
function setup() {
    var canvas = createCanvas(400, 400, WEBGL); // Keep canvas reference
    canvas.parent('sketch-div'); // Necessary to position canvas

}

function draw() {
    clear();
    normalMaterial();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    beginShape();
    vertex(0, 0);
    vertex(0, 100);
    vertex(100, 100);
    vertex(100, 0);
    endShape(CLOSE);
}

