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
        end:Math.floor(Math.random() *100),
        co1:Math.floor(Math.random()*255),
        co2:Math.floor(Math.random () * 255),
        co3:Math.floor(Math.random () * 255)

    };
    const mov1 = {
        r:Math.floor(Math.random() * (255-200)-200),
        g:Math.floor(Math.random() *255),
        b:Math.floor(Math.random() *255)
    }

      fill(mov.co3,mov.co1,mov.co2);
      rect(mouseX, mouseY,100,100,20);
}
 
function mousePressed() {
    background(200,100,218);


}