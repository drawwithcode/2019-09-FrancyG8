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
  crazyBack = color(map(rotationY, -180, 180, 1, width, 0, 360), 100, 255);
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

  // image(cork, windowWidth / 2 - 85, windowHeight / 2 - 116);
  image(bottle, windowWidth / 2 - 241.5, windowHeight / 2);

}

function CorkPop(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.speed = 2;
    //this is a method equal to a function

   this.move = function() {
    this.x += xIncrease * this.speed;
    this.y += yIncrease * this.speed;

    //vertical bouncing
    if(this.y > windowHeight || this.y < 0) {
      yIncrease = -yIncrease; //inverte la direzione quando tocca la fine
    }

    //horizontal bouncing
    if(this.x > windowWidth || this.x < 0) {
      xIncrease = -xIncrease;
    }
  }

  //display method
  this.display = function() {
    image(cork, this.x,this.y);
  }
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
