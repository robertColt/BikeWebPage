//first top layer canvas
var canvas = document.querySelector("#canvas1");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");

//y-of horizont
var horizont = 3*innerHeight/4;



//grass field
c.fillStyle = "#1ABB2A"; //green color
c.fillRect(0, horizont, innerWidth,innerHeight/4);

//draw house
var houseStart = innerWidth/4;
var houseWidth = 2*houseStart;
var houseHeight = 200;
var houseEnd = houseStart + houseWidth;
var roofTop = horizont-houseHeight-houseHeight/2;
var x, y, width, height;


//draw trees
c.strokeStyle = "#BF5100";//brown
c.fillStyle = "#17D100";//green
drawTree(houseStart/2,horizont,houseHeight/2, 0, 12); //left
drawTree(innerWidth - innerWidth/8, horizont, houseHeight/2, 0 ,12); //right

function drawTree(x,y,length,angle,lineWidth){
  c.beginPath();
  c.save();
  c.translate(x, y);
  c.rotate(angle * Math.PI/180);
  c.moveTo(0, 0);
  c.lineTo(0, -length);
  c.lineWidth = lineWidth;
  c.stroke();

  //draw leaves
  if(length <80){
    c.beginPath();
    c.arc(0, -length, 12, 0, Math.PI/2);
    c.fill();
  }

  if(length < 12) {
    c.restore();
    return;
  }
  if(length < 60){
    angle = 15;
  }else{
    angle = 25;
  }

  drawTree(0, -length, length*0.76, -angle, lineWidth*0.67);
  drawTree(0, -length, length*0.65  , 0, lineWidth*0.5);
  drawTree(0, -length, length*0.76, angle, lineWidth*0.67);

  c.restore();
}


//house roof
c.beginPath();
c.moveTo(houseStart, horizont - houseHeight);
c.lineTo(houseStart + 20, roofTop);
c.lineTo(houseEnd - 20, roofTop);
c.lineTo(houseEnd, horizont - houseHeight);
c.lineTo(houseStart, horizont - houseHeight);
c.fillStyle = "#BA3500";
c.stroke();
c.fill();


//house body
c.fillStyle = "#FFF9DD"; //beige
c.fillRect(houseStart, horizont - houseHeight, houseWidth, houseHeight );
c.beginPath();
c.moveTo(houseStart, horizont - houseHeight);
c.lineTo(houseStart, horizont);
c.lineTo(houseStart + houseWidth, horizont);
c.lineTo(houseStart + houseWidth, horizont-houseHeight);
c.strokeStyle = "black";
c.stroke();

//house body triangle
c.moveTo(houseStart + houseWidth/3, horizont-houseHeight);
c.beginPath();
c.lineTo(houseStart+2*houseWidth/3, horizont-houseHeight);
c.lineTo(houseStart+houseWidth/2, roofTop);
c.lineTo(houseStart + houseWidth/3, horizont-houseHeight);
c.strokeStyle = "#FFF9DD";
c.stroke();
c.fill();

//house door
c.fillStyle = "#CA7021"; //brown
x = 2*houseStart-25;
height = 30;
width = 50;
y = horizont-houseHeight/3 - height;
c.fillRect(x , y, width, houseHeight/3 + height);
c.strokeStyle = "black";
c.strokeRect(x , y, width, houseHeight/3 + height);
c.beginPath();
//door handle
c.arc(2*houseStart+10,horizont - houseHeight/6, 4, 0, Math.PI*2 , true);
c.fillStyle = "#FFDD55";//gold
c.fill();

//house window center
c.beginPath();
c.arc(2*houseStart,horizont - houseHeight,30,0,2*Math.PI,true); //top window
c.fillStyle = "#16DCCF"; //window blue
c.fill();

//window wood parts
c.beginPath();
c.moveTo(2*houseStart, horizont - houseHeight - 30);
c.lineTo(2*houseStart,horizont - houseHeight + 30);
c.strokeStyle = "#CA7021"; //brown
c.stroke();

c.beginPath();
c.moveTo(2*houseStart - 30, horizont - houseHeight);
c.lineTo(2*houseStart + 30,horizont - houseHeight);
c.strokeStyle = "#CA7021"; //brown
c.stroke();


//house window left
c.beginPath();
x = houseStart+20;
y = horizont - houseHeight + 40;
width = houseWidth/3 - 40;
height = houseHeight/2;
c.fillRect(x, y, width, height);
c.strokeRect(x,y,width,height);
//wooden parts
c.beginPath();
c.strokeStyle = "#CA7021";
for(var i = x + width/3; i<x+3*width/3; i+=width/3){
  c.beginPath();
  c.moveTo(i, y);
  c.lineTo(i, y + height);
  c.stroke();
}
c.beginPath();
c.moveTo(x, y+height/3);
c.lineTo(x + width, y + height/3);
c.stroke();
c.beginPath();
c.moveTo(x, y + 2*height/3);
c.lineTo(x + width, y + 2*height/3);
c.stroke();


//house window right
c.beginPath();
x = houseStart + houseWidth - 20 - width ;
y = horizont - houseHeight + 40;
c.fillRect(x,y,width,height);
c.strokeRect(x,y,width,height);
//window woods
c.strokeStyle = "#CA7021";
for(var i = x + width/3; i<x+3*width/3; i+=width/3){
  c.beginPath();
  c.moveTo(i, y);
  c.lineTo(i, y + height);
  c.stroke();
}
c.beginPath();
c.moveTo(x, y+height/3);
c.lineTo(x + width, y + height/3);
c.stroke();
c.beginPath();
c.moveTo(x, y + 2*height/3);
c.lineTo(x + width, y + 2*height/3);
c.stroke();

c.closePath();

// draw flowers
c.strokeStyle = "#008B06";//dark green for stem
radius = 5;
              //purple   gold       blue     pink
var colors = ["#7F01C1","#FFB94F","#8CE8FF","#E400D2"];
for (var i = 0; i < 300; i++) {
  x = Math.random() * (innerWidth - radius);
  y = Math.random() * (innerHeight - radius*4 - horizont) + horizont + radius;
  //draw stem
  c.beginPath();
  c.moveTo(x,y);
  c.lineTo(x,y+3*radius);
  c.stroke();
  //draw flower
  c.beginPath();
  c.arc(x, y, radius, 0, 2*Math.PI, true);
  c.fillStyle = colors[Math.floor(Math.random()*(colors.length))];
  c.fill();
  //draw middle
  c.beginPath();
  c.arc(x,y,radius/4, 0, 2*Math.PI,true);
  c.fillStyle = "#FFED5B";
  c.fill();
}

//draw cloud
x = 2*innerWidth/4;
y = houseHeight/2-30;
radius = 30;
drawCloud(x-2*radius, y+radius,radius,"#A9EEFF");
drawCloud(x,y,radius,"#B9F1FF");
drawCloud(x+2*radius,y+2*radius,radius,"#C7F4FF");


function drawCloud(x,y,radius,color){
  c.beginPath();
  c.fillStyle = color;
  for(var k = 0; k<2; k++ ){
    for(var i = x, j = 0 ;j<5; j++){
      c.arc(i += radius+10,y,radius,0, Math.PI*2, true);
      c.fill();
    }
    x+= radius/2;
    y+= radius/2+10;
  }
}


//---------------------------------------
//------------ANIMATION------------------
//---------------------------------------
//sun and moon
var canvas2 = document.querySelector("#canvas2");
canvas2.height = window.innerHeight;
canvas2.width = window.innerWidth;


//back layer canvas 2
var c2 = canvas2.getContext("2d");

//paint sky
c2.fillStyle = "#C4FFFC"; //light blue
c2.fillRect(0,0,innerWidth,innerHeight);


//draw sun
x = innerWidth/8;
y = houseHeight/4;
radius = 40;
c2.beginPath();
c2.arc(x, y, radius, 0, Math.PI*2, true);
c2.fillStyle = "#FFC300 ";//gold
c2.fill();

var time = 0; //control speed on y direction
var day = true;

animateDay();


//animate day and night
function animateDay(){
  id = requestAnimationFrame(animateDay);
  c2.clearRect(0,0,innerWidth,innerHeight);
  //paint sky according to time of the day
  if(x > 3*innerWidth/4 || (x < innerWidth/16 && day)){
    c2.fillStyle = "#FFDF6A";//golden
  }else{
    if(day){
      c2.fillStyle = "#C4FFFC"; //light blue
    }else{
      c2.fillStyle = "#000557"; //dark blue
    }
  }
  c2.fillRect(0,0,innerWidth,innerHeight);


  //draw sun or moon
  if(day){
    if(x > 3*innerWidth/4 || x < innerWidth/16){
      c2.fillStyle = "#FF6A16";//red sun
    }else{
      c2.fillStyle = "#FFC300 ";//gold
    }
  }else{
    c2.fillStyle = "#FFFBEC"; //moon
  }
  c2.beginPath();
  c2.arc(x, y, radius, 0, Math.PI*2, true);
  c2.fill();

  x+=2;
  if(x > innerWidth/2){
    y++;
  }else{
    if(time == 2){
      y++;
      time = 0;
    }
    time++;
  }

  if(x-radius > innerWidth || y-radius > innerHeight){
    x = -radius;
    y = radius;
    day = !day;
  }
}
