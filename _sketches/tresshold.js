var tresshold = 128

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('sketch-div');
    img = loadImage("data/conv2.png");
    loadPixels();
    for (let i = 0; i < pixels.length; i+=4) {
        let c = color(pixels[i], pixels[i + 1], pixels[i + 2], pixels[i + 3])
        if (brightness(c) < tresshold) {
            pixels[i] = pixels[i + 1] = pixels[i + 2] = 0;
        } else {
            pixels[i] = pixels[i + 1] = pixels[i + 2] = 255;
        }
    }
    updatePixels();
    noLoop();
}

function draw(){

}