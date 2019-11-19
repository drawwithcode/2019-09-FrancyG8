/* --This is your new ~Magic Ball~
let it answer yor deepest doubt-- */

//--Setting my variables
var value = 0;
var magicBall;
var answers = ["Yes, baby", "Hell no", "OMG YES", "Nah man", "Could be", "Go for it", "Sashay away"];
var randomword;


function preload() {

  //--Loading my external material
  magicBall = loadImage("assets/magicBall.png");
}


function setup() {

  //--Setting my canvas
  createCanvas(windowWidth, windowHeight);
  background("indigo");
  angleMode(DEGREES);

  //--Setting a "sensible" sensor
  setShakeThreshold(20);
}


function draw() {

  //--Putting my ball in the canvas
  image(magicBall, (width / 2) - 500, (height / 2) - 400, 1000, 1000);

  //--Setting my presentation text
  push();
  var myText = "Let the";
  drawingContext.font = "60px Roboto Mono";
  drawingContext.textAlign = "center";
  fill('white');
  text(myText, width / 2, 100);
  pop();
  push();
  var myText2 = "~ MAGIC BALL ~";
  drawingContext.font = "80px Roboto Mono";
  drawingContext.textAlign = "center";
  fill('skyBlue');
  text(myText2, width / 2, 190);
  pop();
  push();
  var myText3 = "give you the answer";
  drawingContext.font = "60px Roboto Mono";
  drawingContext.textAlign = "center";
  fill('white');
  text(myText3, width / 2, 260);
  pop();
  push();
  var myText4 = "shake it like a polaroid picture";
  drawingContext.font = "30px Roboto Mono";
  drawingContext.textAlign = "center";
  fill('white');
  text(myText4, width / 2, height - 50);
  pop();

  //--This will be your answer
  drawingContext.font = "60px Roboto Mono";
  drawingContext.textAlign = "center";
  fill('skyBlue');
  text(randomword, width / 2, (height / 2) + 110);
}


//--Every time we shake the device, an answer is given
function deviceShaken() {
  randomword = random(answers);
}


//--Touch is not required
function touchMoved() {
  return false;
}


//--Here a permission is asked to the user
function touchEnded() {
  DeviceOrientationEvent.requestPermission()
}
