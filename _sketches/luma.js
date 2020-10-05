var img
function preload(){
    img = loadImage("data/descarga.jpg");
}

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('sketch-div');
    image(img,0,0);
    loadPixels();
    for (let i = 0; i < pixels.length; i+=4) {
        let c = color((0.2126*pixels[i] + 0.0722*pixels[i + 1] +  0.7152*pixels[i + 2])/3);
        pixels[i] = red(c);
        pixels[i + 1] = green(c);
        pixels[i + 2] = blue(c);
    }
    updatePixels();
}