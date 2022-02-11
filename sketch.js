/*jshint esversion: 9 */
let width = 420;
let height = 200;
let nouns = {};


let draw_text = (y) => {
  let idx = random(Object.keys(nouns));
  text(nouns[idx] + " partout, justice nulle part", 20, y);
};


function draw_poem() {
  background("#f8f5e6");
  textSize(30);
  text("Lieux de lutte", 100, 30);
  textSize(20);
  for (i = 1; i < 4; i++) {
    draw_text(40 + 20 * i);
  }
  for (i = 1; i < 4; i++) {
    draw_text(120 + 20 * i);
  }
}

function draw() {
  draw_poem();
}

function preload() {
  let clbk = _ => { console.log("loaded"); };
  nouns = loadJSON("https://raw.githubusercontent.com/akaAgar/vocabulaire-francais/master/Noms%20communs%2C%20masculin%20pluriel%20(complet).json", clbk, error => console.log("error:", error));
  // nouns = loadJSON("names.json", clbk, error => console.log("error:", error));
}

function setup() {
  // nouns = ["jello"];
  createCanvas(width, height);
  background("#f8f5e6");
  noLoop();
  textFont("arida");
  textSize(20);
}

function keyPressed() {
  console.log(keyCode);
  if (keyCode === 83) {
    save("truc.png");
  }
  else if (keyCode === 82) {
    draw_poem();
  }
}