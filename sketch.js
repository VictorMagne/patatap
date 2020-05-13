505/*
linen peachpuff snow aquamarine bisque darkseagreen darksalmon lemonchiffon lightblue lightcoral lightcyan lightsalmon lightgreen mistyrose papayawhip peru rosybrown sandybrown seagreen cadetblue
*/

let ww;
let wh;
let x;
let y;
let i = 0;
let j = 0;
let k = 0;
let easing = 0.1;
let delay = 0.8;
let delayPlus = 1.5;
let clic = false;
let press = false;

let color;
let color1 = "bisque";
let color2 = "mistyrose";
let color3 = "lightsalmon";
let color4 = "peachpuff";

//let son1;
//let timer;

  function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.class("moncanvas")
  // frameRate(100);

  son1 = new Audio("./sons/kick.wav");
  son2 = new Audio("./sons/hihat2.wav");
  son3 = new Audio("./sons/up.wav");
  son4 = new Audio("./sons/double2.wav");
  son5 = new Audio("./sons/burst.wav");
  son6 = new Audio("./sons/snare2.wav");
  son7 = new Audio("./sons/slide2.wav");
  son8 = new Audio("./sons/bloup.wav");
  son9 = new Audio("./sons/rain.wav");
  son10 = new Audio("./sons/butterfly.wav");

  //son1 = new Audio("ufo.mp3");
}

function draw() {
  ww=windowWidth;
  wh=windowHeight;
  x=mouseX;
  y=mouseY;
  clavier();
  souris();

  //timer = timer+1;
  //timeout();
  //console.log(timer);
  console.log(clic, press);

}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function mousePressed(){
  clic = true;
  i=0;
  j=0;
  k=0;
}

function keyPressed(){
  press = true;
  i=0;
  j=0;
}

/*
function timeout(){
if(timer>30){
clic=false;
press=false;
timer=0;
}
}
*/

/**************************
SOURIS SOURIS SOURIS
**************************/

function mouseClicked(){
  if(mouseX>0 && mouseX<ww/5 && mouseY>0 && mouseY<wh/2){
    zone1();
    son1.play();
  }

  if(mouseX>ww/5 && mouseX<(ww/5)*2 && mouseY>0 && mouseY<wh/2){
    zone2();
    son2.play();
  }

  if(mouseX>(ww/5)*2 && mouseX<(ww/5)*3 && mouseY>0 && mouseY<wh/2){
    zone3();
    son3.play();

  }

  if(mouseX>(ww/5)*3 && mouseX<(ww/5)*4 && mouseY>0 && mouseY<wh/2){
    zone4();
    son4.play();

  }
  if(mouseX>(ww/5)*4 && mouseX<(ww/5)*5 && mouseY>0 && mouseY<wh/2){
    zone5();
    son5.play();
  }

  //DEUXIEME LIGNE

  if(mouseX>0 && mouseX<ww/5 && mouseY>wh/2 && mouseY<wh){
    zone6();
    son6.play();
  }

  if(mouseX>ww/5 && mouseX<(ww/5)*2 && mouseY>wh/2 && mouseY<wh){
    zone7();
    son7.play();
  }

  if(mouseX>(ww/5)*2 && mouseX<(ww/5)*3 && mouseY>wh/2 && mouseY<wh){
    zone8();
    son8.play();
  }

  if(mouseX>(ww/5)*3 && mouseX<(ww/5)*4 && mouseY>wh/2 && mouseY<wh){
    zone9();
    son9.play();
  }

  if(mouseX>(ww/5)*4 && mouseX<(ww/5)*5 && mouseY>wh/2 && mouseY<wh){
    zone10();
    son10.play();
  }

}

function souris(){

  if(clic){
    //zone 1
    if(mouseX>0 && mouseX<ww/5 && mouseY>0 && mouseY<wh/2){
      zone1();
      // son1.play();
    }
    if(mouseX>ww/5 && mouseX<(ww/5)*2 && mouseY>0 && mouseY<wh/2){
      zone2();
    }

    if(mouseX>(ww/5)*2 && mouseX<(ww/5)*3 && mouseY>0 && mouseY<wh/2){
      zone3();
    }

    if(mouseX>(ww/5)*3 && mouseX<(ww/5)*4 && mouseY>0 && mouseY<wh/2){
      zone4();
    }

    if(mouseX>(ww/5)*4 && mouseX<(ww/5)*5 && mouseY>0 && mouseY<wh/2){
      zone5();
    }

    //DEUXIEME LIGNE

    if(mouseX>0 && mouseX<ww/5 && mouseY>wh/2 && mouseY<wh){
      zone6();
    }

    if(mouseX>ww/5 && mouseX<(ww/5)*2 && mouseY>wh/2 && mouseY<wh){
      zone7();
    }

    if(mouseX>(ww/5)*2 && mouseX<(ww/5)*3 && mouseY>wh/2 && mouseY<wh){
      zone8();
    }

    if(mouseX>(ww/5)*3 && mouseX<(ww/5)*4 && mouseY>wh/2 && mouseY<wh){
      zone9();
    }

    if(mouseX>(ww/5)*4 && mouseX<(ww/5)*5 && mouseY>wh/2 && mouseY<wh){
      zone10();
    }
  }
}

/**************************
CLAVIER CLAVIER CLAVIER
**************************/

function clavier(){
  if(press){
    if(keyCode === UP_ARROW){
      console.log("haut");
      zone1();

    }

    if(keyCode === DOWN_ARROW){
      console.log("bas");
      zone2();
    }

    if(keyCode === LEFT_ARROW){
      console.log("gauche");
      zone3();
    }

    if(keyCode === RIGHT_ARROW){
      console.log("droite");
      zone4();
    }
  }
}

/**************************
FORMES FORMES FORMES FORMES
**************************/

function zone1(){
  if(clic || press){

    color = color1;
    background("white");

    //son1.play();

    if(i<1000) {
      i+=20;
      rectMode(CENTER);
      noStroke();
      fill(84,51,232);
      rect(ww/2,wh/2,i*2,i*2);
      fill(252,33,60);
      rect(ww/2,wh/2,i,i);

    }
    if(j<400) {
      j+=30*delay;
      rectMode(CENTER);
      noStroke();
      fill("yellow");
      rect(ww/2,wh/2,j,j);
    }
  }
}


function zone2(){
  if(clic || press){
    color = color2;
    background("white");

    if(i<400) {
      fill(84,51,232);
      noStroke();
      ellipse(ww/2,wh/2,250+i,250+i);

      fill(252,33,60);
      noStroke();
      ellipse(ww/2,wh/2,100+i,100+i);
    }
    if(j<400) {
      j+=30*delay;
      noStroke();
      fill("yellow");
      ellipse(ww/2,wh/2,10+j,10+j);
    }
  }
}

function zone3(){
  if(clic || press){
    color = color3;
    background(252,33,60);

    if(i<2000) {
      i+=20;
      fill('yellow');
      noStroke();
      triangle(0, wh, ww/2, wh/2-i*0.8,ww,wh);

      fill(84,51,232);
      noStroke();
      triangle(0, wh, ww/2, wh/2-i*0.4,ww,wh);

      fill(252,33,60);
      noStroke();
      triangle(0, wh, ww/2, wh/2-i*0.1,ww,wh);
    }
    if(j<400) {

    }
  }
}

function zone4(){
  if(clic || press){
    color = color4;
    background(84,51,232);

    if(i<ww*2) {

      rectMode(CENTER);
      fill(252,33,60);
      rect(ww,wh,i*3,wh);

      fill("yellow");
      rect(0,0,i*3,wh);

      i+=30
      strokeWeight(0);

      fill(252,33,60);

      ellipse(ww/2,wh-i*0.5,100+i*0.1,100+i*0.1);

      fill("yellow");

      ellipse(ww/2,0+i*0.5,100+i*0.1,100+i*0.1);



    }
    if(j<ww*2) {
      j+=70;
      strokeWeight(0);

    }
  }
}
function zone5(){
  if(clic || press){
    color = color4;
    background(84,51,232);

    if(i<2500) {
      i+=30;

      fill(252,33,60);
      ellipseMode(CENTER);
      ellipse(ww/2,wh,i+50,i+50);

      fill("yellow");
      ellipseMode(CENTER);
      ellipse(ww/2,wh,i,i);
    }
    if(j<400) {
    }
  }
}

function zone6(){
  if(clic || press){
    color = color4;
    background(84,51,232);

    if(i<3500) {
      i+=5;
      rectMode(CENTER);
      fill("white")
      rect(ww/2,wh/2,50,i)

      i+=20;
      rectMode(CENTER);
      fill("yellow")
      rect(ww/2-350,wh/2,50,i-30)

      i+=20;
      rectMode(CENTER);
      fill("yellow")
      rect(ww/2+350,wh/2,50,i-30)
    }
    if(j<1000) {

      j+=30*delay;
      rectMode(CENTER);
      fill("white")
      rect(ww/2-250,wh/2,50,j)

      i+=30;
      rectMode(CENTER);
      fill("white")
      rect(ww/2+250,wh/2,50,j)

    }

    if(k<1000) {

      k+=16*delay;
      rectMode(CENTER);
      fill(252,33,60)
      rect(ww/2+150,wh/2,50,k)

      i+=30;
      rectMode(CENTER);
      fill(252,33,60)
      rect(ww/2-150,wh/2,50,k)

    }
  }
}

function zone7(){
  if(clic || press){
    color = color4;
    background("white");

    if(i<1200) {

      i+=20;

      rectMode(CENTER);

      fill(84,51,232);
      rect(ww/2,wh/2,0+i*7,0+i*6);
      fill("yellow");
      rect(0,wh/2,0+i*5,10);

      fill(252,33,60)
      noStroke();
      ellipse(50+500,wh/2-i*0.02,40,40);
      ellipse(100+500,wh/2-i*0.02,40,40);
      ellipse(150+500,wh/2+i*0.01,40,40);
      ellipse(200+500,wh/2-i*0.02,40,40);
      ellipse(250+500,wh/2+i*0.01,40,40);
      ellipse(300+500,wh/2-i*0.02,40,40);
      ellipse(350+500,wh/2+i*0.01,40,40);
      ellipse(400+500,wh/2-i*0.02,40,40);
      ellipse(450+500,wh/2-i*0.02,40,40);
      ellipse(500+500,wh/2+i*0.01,40,40);
      ellipse(550+500,wh/2+i*0.02,40,40);
      ellipse(600+500,wh/2+i*0.02,40,40);
      ellipse(650+500,wh/2+i*0.02,40,40);
      ellipse(700+500,wh/2-i*0.02,40,40);
      ellipse(750+500,wh/2+i*0.01,40,40);
      ellipse(800+500,wh/2+i*0.01,40,40);
      ellipse(850+500,wh/2-i*0.02,40,40);
      ellipse(900+500,wh/2+i*0.01,40,40);




    }
    if(j<400) {
j+=25;


    }
  }
}

function zone8(){
  if(clic || press){
    color = color4;
    background("yellow");

    if(i<4000) {
      i+=30;
      stroke(255);
      noFill();
      strokeWeight(20);
      bezier(ww/5, 50, 1000,i, 200,500,i,1000)

      stroke(252,33,60);
      bezier(ww/3,0, wh,i+50, 200,500,i+50,0)


      stroke(84,51,232);
      bezier(ww/2, 200, wh/2,i+450, 1000,0,i+250,0)

      stroke(255);
      bezier(ww/4,400, wh/4,i+150,0,0,i+150,600)

      stroke(252,33,60);
      bezier(ww-250,400, wh/4,i+150,0,0,i+150,600)
    }
    if(j<400) {
      j+=30*delay;

    }
  }
}

function zone9(){
  if(clic || press){
    color = color4;
    background(252,33,60);

    if(i<4000) {
      i+=30;

      fill(255);
      noStroke();
      rect(50,i*0.2,5,600);
      rect(150,i*0.4,5,600);
      rect(250,i*0.7,5,600);
      rect(350,i*0.8,5,600);
      rect(450,i*0.1,5,600);
      rect(550,i*0.9,5,600);
      rect(650,i*0.15,5,600);
      rect(750,i*0.5,5,600);
      rect(850,i*0.4,5,600);
      rect(950,i*0.3,5,600);

      rect(1050,i*0.2,5,600);
      rect(1150,i*0.4,5,600);
      rect(1250,i*0.7,5,600);
      rect(1350,i*0.8,5,600);
      rect(1450,i*0.1,5,600);
      rect(1550,i*0.9,5,600);
      rect(1650,i*0.15,5,600);
      rect(1750,i*0.5,5,600);
      rect(1850,i*0.4,5,600);
      rect(1950,i*0.3,5,600);

//--------------------------------------------

fill(84,51,232);

      rect(50+50,0-i*0.2,5,600);
      rect(150+50,0-i*0.4,5,600);
      rect(250+50,0-i*0.7,5,600);
      rect(350+50,0-i*0.8,5,600);
      rect(450+50,0-i*0.1,5,600);
      rect(550+50,0-i*0.9,5,600);
      rect(650+50,0-i*0.15,5,600);
      rect(750+50,0-i*0.5,5,600);
      rect(850+50,0-i*0.4,5,600);
      rect(950+50,0-i*0.3,5,600);

      rect(1050+50,0-i*0.2,5,600);
      rect(1150+50,0-i*0.4,5,600);
      rect(1250+50,0-i*0.7,5,600);
      rect(1350+50,0-i*0.8,5,600);
      rect(1450+50,0-i*0.1,5,600);
      rect(1550+50,0-i*0.9,5,600);
      rect(1650+50,0-i*0.15,5,600);
      rect(1750+50,0-i*0.5,5,600);
      rect(1850+50,0-i*0.4,5,600);
      rect(1950+50,0-i*0.3,5,600);

    }
    if(j<400) {
      i+=30;

    }
  }
}

function zone10(){
  if(clic || press){
    color = color4;
    background("yellow");

    if(i<1300) {
      i+=16;
      fill(252,33,60);
      noStroke();
      triangle(400,600-i,ww/2,wh/2,600,600+i);
      fill("white");
      triangle(100,200-i,ww/2,wh/2,300,200+i);
      fill(84,51,232);
      triangle(600,800-i,ww/2,wh/2,800,800+i);
      fill(252,33,60);
      triangle(300,400-i,ww/2,wh/2,300,300+i);
      fill(84,51,232);
      triangle(1000,1200-i,ww/2,wh/2,1500,1500+i);

      fill(252,33,60);
      noStroke();
      triangle(1400,1600-i,ww/2,wh/2,1600,1600+i);
      fill("white");
      triangle(1100,1200-i,ww/2,wh/2,1300,1200+i);
      fill(84,51,232);
      triangle(1600,1800-i,ww/2,wh/2,1800,1800+i);
      fill(252,33,60);
      triangle(11300,11400-i,ww/2,wh/2,11300,11300+i);
      fill(84,51,232);
      triangle(11000,11200-i,ww/2,wh/2,11500,11500+i);



    }
    if(j<400) {
      j+=30*delay;

    }
  }
}
