 var a,b,c,d,e,m,n,o,r,s,t,arry=[],may=[],ray=[],say=[];
 var bo1=document.getElementById("bo1");
 var bo2=document.getElementById("bo2");
 var bo3=document.getElementById("bo3");

 
 bu1.addEventListener("click",fun1);
 bu2.addEventListener("click",fun2);

 function fun1() {
     var rand=Math.floor(Math.random() * 5);
     bo2.innerHTML=rand;
     a=rand;
      
       switch (a) {
           case 0:
               b="zero";
               break;
            case 1:
                b="one";
                break;
            case 2:
                b="two";
                break;
            case 3:
                b="three";
                break;
            case 4:
                b="four";
                break;
            case 5:
                b="five";
                break;
       }
             
        bo1.innerHTML=a + b;
        bo2.innerHTML=b;
        console.log(a + b);
         }

function fun2() {
    console.log(a);
    bo3.innerHTML=b;
}