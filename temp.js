
 var a,b,c,d,e,m,n,o,r,s,t,x=50,arry=[],may=[],ray=[];
 
 function setup() {
     createCanvas(1400,600);
     background(218,160,220);
 }
 function draw() {
    var mov = {
        x:Math.floor(Math.random()*1200),
        y:Math.floor(Math.random()*600),
        mid:Math.floor(Math.random() *600),
        colr:Math.floor(Math.random() *255),
        colg:Math.floor(Math.random() *255),
        colb:Math.floor(Math.random() *255)
    }
    var mov1 = {
      x:Math.floor(Math.random()*(1200-800) +800),
      y:Math.floor(Math.random()*600),
      mid:Math.floor(Math.random() * 100)
    }
    
   
     var rand=Math.floor(Math.random()*255);
     fill(mov.colr,mov.colg,mov.colb);
      ellipse(mov.x,mov.y,mov.mid,rand);
      ellipse(mov1.x,mov1.y,mov1.mid,rand);


   }
 function mousePressed() {
    background(218,160,220);
  }