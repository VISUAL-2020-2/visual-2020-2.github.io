// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'data/model/';

// Video
let video;
let flippedVideo;
// To store the classification
let img;
let data = [{label: "", confidence: 0}, {label: "", confidence: 0}, {label: "", confidence: 0}];
// Load the model first
function preload() {
  img = loadImage("0101.jpeg");
  classifier = ml5.imageClassifier(imageModelURL+'model.json');
}

function setup() {
  var canvas = createCanvas(400, 500);
  canvas.parent('sketch-div');
  img.resize(400, 400);
  flippedVideo = ml5.flipImage(img);
  // Start classifying
  classifyVideo();
  var input = createFileInput(handleFile);
  input.parent('histogram-div');
}

function draw() {
  clear();
  // Draw the video
  image(img, 0, 0);
  img.resize(400, 400);
  classifyVideo();
  drawHistogram();
}

function classifyVideo() {
  flippedVideo = ml5.flipImage(img)
  classifier.classify(flippedVideo, gotResult);
  flippedVideo.remove();
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  data = results;
}

function handleFile(file) {
  if (file.type === 'image') {
    data = [{label: "", confidence: 0}, {label: "", confidence: 0}, {label: "", confidence: 0}];
    img = loadImage(file.data);
    img.resize(400, 400);
    classifyVideo();
  } else {
    alert('The file selected is not an image');
  }
}

function drawHistogram() {
  console.log("Drawing histogram ^^");
  console.log(data);
  drawRectange(data[0].label, 0, data[0].confidence );
  drawRectange(data[1].label, 1, data[1].confidence );
  drawRectange(data[2].label, 2, data[2].confidence );
}

function drawRectange(label, pos, length) {
  textAlign(LEFT);
  text(label, 0, pos*30+430);
  fill(0);
  rect(100, pos*30+410, length*250, 25);
  text((int(length*10000)/100)+"%", 110+length*250, pos*30+430);
}
