var a,b,c,d,e,m,n,o,r,s,t,x,arry=[],may=[],ray=[],say=[];

const mov = {
    x:Math.floor(Math.random() *1000),
    y:Math.floor(Math.random() *400),
    mid:Math.floor(Math.random() *100),
    end:Math.floor(Math.random() *100)
}

function setup() {
    
    createCanvas(1000,450);
    background(200,100,218);


}

function draw() {
    const mov = {
        x:Math.floor(Math.random() *1000),
        y:Math.floor(Math.random() *400),
        mid:Math.floor(Math.random() *10),
        end:Math.floor(Math.random() *100)
    }

      background(210,0,200);  
     fill(10,100,210);
      rect(500, 300, 100,100,100);
       quad(mouseX, mouseY, 300, 50, 69, 50, 50, 300);
    }

function mousePressed() {
    background(200,100,218);


}