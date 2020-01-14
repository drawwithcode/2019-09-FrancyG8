/* --Too many magic balls...Time for a toast!-- */

//--Setting my variables
var value = 0;
var bottle;
var cork;
var colorList = ['OrangeRed', 'Gold', 'White', 'LightCyan', 'DodgerBlue'];


function preload() {

  //--Loading my external material
  bottle = loadImage("assets/bottle.png"); //483x927px
  cork = loadImage("assets/cork.png"); //172x232px
}


function setup() {

  //--Setting my canvas
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(80);
  colorMode(HSB);

  //--Setting a "sensible" sensor
  setShakeThreshold(20);

  myCork = new Cork(windowWidth / 2 - 85, windowHeight / 2 - 116, cork);
}


function draw() {

  if (value == 0) {

    //--Background
    crazyBack = color(map(rotationY, -90, 90, 1, width, 0, 360), 75, 100);
    background(crazyBack);

    //--Instructions
    push();
    var myText = "Shake to Saber";
    textSize(30);
    textStyle(BOLD);
    textAlign(CENTER);
    fill('Khaki');
    text(myText, windowWidth / 6, windowHeight - 60);
    pop();

    //--Cork
    myCork.display();
    //--Bottle
    image(bottle, windowWidth / 2 - 241.5, windowHeight / 2);

    //--Window border
    push();
    noFill();
    strokeWeight(40);
    stroke('Khaki');
    rect(0, 0, windowWidth, windowHeight);
    pop();

  } else if (value == 1) {

    //--Background
    background("black");

    //--Sparcle
    var index = floor(random() * colorList.length);
    var colorHex = colorList[index];
    fill(color(colorHex));
    noStroke();
    var s = random() * width;
    var t = random() * height;
    var v = random() * 100;
    circle(s, t, v);

    //--Greetings
    push();
    var myText = "HAPPY\nNEW YEAR\n2020!";
    textSize(130);
    textStyle(BOLD);
    textAlign(CENTER);
    fill('Khaki');
    text(myText, windowWidth / 2, windowHeight / 5);
    pop();

    //--Bottle
    image(bottle, windowWidth / 2 - 241.5, windowHeight / 2);

    //--Window border
    push();
    noFill();
    strokeWeight(40);
    stroke('Khaki');
    rect(0, 0, windowWidth, windowHeight);
    pop();
  }
}

//--My cork
function Cork(_x, _y, cork) {
  this.x = _x;
  this.y = _y;
  this.img = cork;

  this.speed = 2;

  this.move = function() {
    this.x += this.speed;
    this.y += this.speed;
  }

  this.display = function() {
    image(this.img, this.x, this.y);
  }
}


//--After shaking the phone, the cork will move
function deviceShaken() {
  value = 1;
}


//--Touch is not required
function touchMoved() {
  return false;
}


//--Here a permission is asked to the user
function touchEnded(event) {
  DeviceOrientationEvent.requestPermission();
}
