var vol

function preload() {
  immagine1= loadImage('assets/1.png')
  immagine2= loadImage('assets/2.png')
  immagine3= loadImage('assets/3.png')
  immagine4= loadImage('assets/4.png')
  immagine5= loadImage('assets/5.png')
  immagine6= loadImage('assets/6.png')
  immagine7= loadImage('assets/7.png')
  immagine8= loadImage('assets/8.png')

}


function setup() {
  createCanvas(windowWidth,windowHeight)
  angleMode(DEGREES)
  
  mic = new p5.AudioIn();
  mic.start();
  
}

function draw() {
  background(200,20,0);
  //background(255)
  noStroke()
  ellipse(width/2,height/2,width/1.8,width/1.8);

  var vol = mic.getLevel();

  image(immagine8,width/2-width/4,height/2-width/4,width/2,width/2)
  testaRenna()
  zampaRenna()
  zampaBabbo()
  image(immagine4,width/2-width/4,height/2-width/4,width/2,width/2)
  image(immagine6,width/2-width/4,height/2-width/4,width/2,width/2)
  image(immagine1,width/2-width/4,height/2-width/4,width/2,width/2)
  testaBabbo()


}

function testaBabbo(){
  push()
  translate(width/1.7,height/2)
  var vol = mic.getLevel();
  rotate(vol*100)
  w= width/7
  h= width/5
  image(immagine2,-h/2,-h,w,h)
  fill(200,20,0);
  ellipse(-width/100,-width/25,5 + vol*100)
  pop()
}


function testaRenna(){
  push()
  translate(width/2.09,height/2)
  var vol = mic.getLevel();
  rotate(-vol*40)
  w= width/2.5
  h= width/2.5
  image(immagine3,-h/2,-h/2,w,h)
  fill(200,20,0);
  ellipse(-width/14,-width/20,5+vol*60)
  pop()
}


function zampaRenna(){
  push()
  translate(width/2.1,width/60+height/2)
  var vol = mic.getLevel();
  rotate(vol*60)
  w= width/2.5
  h= width/2.5
  image(immagine7,-h/2,-h/2,w,h)
  pop()
}

function zampaBabbo(){
  push()
  translate(width/2.1,width/60+height/2)
  var vol = mic.getLevel();
  rotate(-vol*60)
  w= width/2
  h= width/2
  image(immagine5,-h/2,-h/2,w,h)
  pop()
}








function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

