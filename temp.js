var a,b,c,d,e,f,i,n,o,r,s,t,aray=[],may=[],ray=[],say=[];


  
but1.addEventListener("click",fun1);
 function fun1() {
    for(i=0;i<10;i++) {
        var rand=Math.floor(Math.random()*100);
        aray[i]=rand;
    
    if(rand%2==0) {
        may.push(rand);
    }
    else {
        ray.push(rand);
        say=ray.slice();
        say.reverse();
    }
     document.getElementById("po1").innerHTML=aray;
    document.getElementById("bo1").innerHTML=may;
    document.getElementById("bo4").innerHTML=ray;
    document.getElementById("bo7").innerHTML=say;
}
 }