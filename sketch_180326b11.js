createCanvas(512,256);

background(0,255,0);

stroke(255,0,0);

 
function setup() {
for(var i=0; i<width; i+=5){

  strokeWeight(i/50+1);

  stroke(0,0,255-i/2);

 

  line(i,0, i, height);

}

 

for(var i=0; i<height; i=i+20){

  strokeWeight(i/50+1);

 

  line(0,i,width,i);

}
}