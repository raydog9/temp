 var a,b,c,d,e,m,n,o,r,s,t,arry=[],may=[],ray=[],say=[];
 var bo1=document.getElementById("bo1");
 var bo2=document.getElementById("bo2");
 var bo3=document.getElementById("bo3");

 
 bu1.addEventListener("click",fun1);
 bu2.addEventListener("click",fun2);

 function fun1() {
     var rand=Math.floor(Math.random() * 30);
     

     a=rand;
      
       switch (true) {
           case a<10:
               b="ten";
               break;
            case a<20:
                b="twenty";
                break;
            case a<30:
                b="thirty";
                break;

       }
        bo1.innerHTML=a
        bo2.innerHTML=b;

       return b;
}



function fun2() {
    bo1.innerHTML="";
    bo2.innerHTML="";
  
}