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
    const mov1 = {
        r:Math.floor(Math.random() * (255-200)-200),
        g:Math.floor(Math.random() *255),
        b:Math.floor(Math.random() *255)
    }

      fill(100,0,100);
      rect(mouseX, mouseY,100,100,20);
}
 
function mousePressed() {
    background(200,100,218);


}