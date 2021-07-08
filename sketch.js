let r = 30;//顔大きさ
let q = 10;//顔総数
let a = 3;//顔種類数

let x1 = [];
let y1 = [];
let dx1 = [];
let dy1 = [];
let count1 = 0;

let x2 = [];
let y2 = [];
let dx2 = [];
let dy2 = [];
let count2 = 0;

let x3 = [];
let y3 = [];
let dx3 = [];
let dy3 = [];
let count3 = 0;

function preload(){

  face1 = loadImage("face1.png");
  face2 = loadImage("face2.png");
  face3 = loadImage("face3.png");
}

function setup(){
  createCanvas(720,480);
  ellipseMode(RADIUS);
  background(0,0,0);
  frameRate(50);
  
  
  let i;
  for(i=0;i<q;i++){
    x1[i] = -r;
    x2[i] = -r;
    x3[i] = -r;
  }
}

function draw(){
  background(255);
  
  fill(0);
  rect(0,height*5/6,width,height);
  
  image(face1,width/a/2-r,height*5/6+(height/6-r*2)/2,r*2,r*2);
  image(face2,width*2/a-width/a/2-2-r,height*5/6+(height/6-r*2)/2,r*2,r*2);
  image(face3,width*3/a-width/a/2-2-r,height*5/6+(height/6-r*2)/2,r*2,r*2);
  
  let i;
  for(i=0;i<q;i++){
    image(face1,x1[i],y1[i],r,r);
    x1[i] = x1[i] + dx1[i];
    y1[i] = y1[i] + dy1[i];
    if(y1[i] > height*5/6-r || y1[i] < 0)  dy1[i] = -dy1[i];
    if(x1[i] > width-r || x1[i] < 0 )  dx1[i] = -dx1[i];
  }
  
  let j;
  for(j=0;j<q;j++){
    image(face2,x2[j],y2[j],r,r);
    x2[j] = x2[j] + dx2[j];
    y2[j] = y2[j] + dy2[j];
    if(y2[j] > height*5/6-r || y2[j] < 0)  dy2[j] = -dy2[j];
    if(x2[j] > width-r || x2[j] < 0)  dx2[j] = -dx2[j];
  }
  
  let k;
  for(k=0;k<q;k++){
    image(face3,x3[k],y3[k],r,r);
    x3[k] = x3[k] + dx3[k];
    y3[k] = y3[k] + dy3[k];
    if(y3[k] > height*5/6-r || y3[k] < 0)  dy3[k] = -dy3[k];
    if(x3[k] > width-r || x3[k] < 0)  dx3[k] = -dx3[k];
  }
}

function mousePressed(){
  if(mouseY > 400){
    if(mouseX < width/a){
      if(count1 < q){
        x1[count1] = random(r,width-r);
        y1[count1] = random(r,height*5/6-r);
        dx1[count1] = random(2,5);
        dy1[count1] = random(2,5);
        count1++;
      }
    }
    if((width/a < mouseX)&&(mouseX < width*2/a)){
      if(count2 < q){
        x2[count2] = random(r,width-r);
        y2[count2] = random(r,height*5/6-r);
        dx2[count2] = random(2,5);
        dy2[count2] = random(2,5);
        count2++;
      }
    }
    if((width*2/a < mouseX)&&(mouseX < width*3/a)){
      if(count3 < q){
        x3[count3] = random(r,width-r);
        y3[count3] = random(r,height*5/6-r);
        dx3[count3] = random(2,5);
        dy3[count3] = random(2,5);
        count3++;
      }
    }
  } 
}