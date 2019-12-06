 var a,b,c,d,e,m,n,o,r,s,t,x=50,arry=[],may=[],ray=[];
 
 function setup() {
     createCanvas(1400,600);
     background(218,160,220);
 }
 function draw() {
    var mov = {
        x:Math.floor(Math.random()*1000),
        y:Math.floor(Math.random()*600),
        mid:Math.floor(Math.random()*500)
    };
   
     var rand=Math.floor(Math.random()*100);
     fill(00,100,100);
     background(218,160,220);
     ellipse(mov.x,mov.y,mov.mid,rand);

   }
 function mousePressed() {
    background(218,160,220);
  }