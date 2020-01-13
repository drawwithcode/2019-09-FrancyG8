/* --Too many magic balls...Time for a toast!-- */

//--Setting my variables
var value = 0;
var bottle;
var cork;


function preload() {

  //--Loading my external material
  bottle = loadImage("assets/bottle.png"); //483x927px
  cork = loadImage("assets/cork.png"); //172x232px
}


function setup() {

  //--Setting my canvas
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(12);
  colorMode(HSB);

  //--Setting a "sensible" sensor
  setShakeThreshold(20);
}


function draw() {

  //--Changing my background
  crazyBack = color(map(rotationX, -180, 180, 1, width, 0, 360), 75, 100);
  background(crazyBack);

  push();
  noFill();
  strokeWeight(40);
  stroke('Khaki');
  rect(0, 0, windowWidth, windowHeight);
  pop();

  //--Instructions
  push();
  var myText = "Shake to Saber";
  textSize(30);
  textStyle(BOLD);
  textAlign(CENTER);
  fill('Khaki');
  text(myText, windowWidth / 6, windowHeight - 60);
  pop();

  image(cork, windowWidth / 2 - 85, windowHeight / 2 - 116);
  image(bottle, windowWidth / 2 - 241.5, windowHeight / 2);

}

function corkPop() {

}


//--After shaking the phone, the cork will move
function deviceShaken() {
  value = value + 10;
	if (value > windowHeight) {
		value = 0;
  }
}


//--Touch is not required
function touchMoved() {
  return false;
}


//--Here a permission is asked to the user
function touchEnded(event) {
  DeviceOrientationEvent.requestPermission();
}
