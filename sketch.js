/* --Too many magic balls...Time for a toast!-- */

//--Setting my variables
var value = 0;
var bottle;
var cork;
let x = windowWidth / 2 - 85;
let y = windowHeight / 2 - 116;
let xspeed = 5;
let yspeed = 2;


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
  //
  // //--Background
  // crazyBack = color(map(rotationY, -90, 90, 1, width, 0, 360), 75, 100);
  // background(crazyBack);
  //
  // //--Window border
  // push();
  // noFill();
  // strokeWeight(40);
  // stroke('Khaki');
  // rect(0, 0, windowWidth, windowHeight);
  // pop();
  //
  // //--Instructions
  // push();
  // var myText = "Shake to Saber";
  // textSize(30);
  // textStyle(BOLD);
  // textAlign(CENTER);
  // fill('Khaki');
  // text(myText, windowWidth / 6, windowHeight - 60);
  // pop();
  //
  // // image(cork, windowWidth / 2 - 85, windowHeight / 2 - 116);
  // image(bottle, windowWidth / 2 - 241.5, windowHeight / 2);

  if (value === 0) {
    //--Background
    crazyBack = color(map(rotationY, -90, 90, 1, width, 0, 360), 75, 100);
    background(crazyBack);

    //--Window border
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

  } else if (value === 1) {
    //--Background
    crazyBack = color(map(rotationY, -90, 90, 1, width, 0, 360), 75, 100);
    background(crazyBack);

    //--Window border
    push();
    noFill();
    strokeWeight(40);
    stroke('Khaki');
    rect(0, 0, windowWidth, windowHeight);
    pop();

    //--Instructions
    push();
    var myText = "HAPPY\nNEW YEAR\n2020!";
    textSize(100);
    textStyle(BOLD);
    textAlign(CENTER);
    fill('Khaki');
    text(myText, windowWidth / 2, 100);
    pop();

    image(bottle, windowWidth / 2 - 241.5, windowHeight / 2);

    image(cork, r * 2, r * 2);
    x += xspeed;
    y += yspeed;
    if (x > width - r || x < r) {
      xspeed = -xspeed;
    }
    if (y > height - r || y < r) {
      yspeed = -yspeed;
    }
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
