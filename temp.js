 var a,b,c,d,e,m,n,o,r,s,t,arry=[],may=[],ray=[],say=[];
 var bo1=document.getElementById("bo1");
 var bo2=document.getElementById("bo2");
 var bo3=document.getElementById("bo3");

 
 bu1.addEventListener("click",fun1);
 bu2.addEventListener("click",fun2);

 function fun1() {
     var rand=Math.floor(Math.random() * 40);
        a=rand;

    if (a>0 || a<10) {
        b="ten";
        return b;
    }
    else if (a>10 || a<20) {
         b="twenty";
         return b;
    }
    else {
        b="thirty";
    bo1.innerHTML=a
    bo2.innerHTML=b;
}
bo1.innerHTML=a
bo2.innerHTML=b;




 

       }



function fun2() {
    bo1.innerHTML="";
    bo2.innerHTML="";
  
}