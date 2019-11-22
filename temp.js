 var a,b,c,d,r,s,t,arry=[],may=[],ray=[],say=[];
 var bo1=document.getElementById("bo1"); 
 var bo2=document.getElementById("bo2");
 var bo3=document.getElementById("bo3");
 var bo4=document.getElementById("bo4");

 bu1.addEventListener("click", fun1);
 bu2.addEventListener("click", fun2);

 function fun1() {
     var rand=Math.floor(Math.random ()*100);
     a=rand;
     bo1.innerHTML=a;

 }

 function fun2() {
     bo1.innerHTML="";
     bo2.innerHTML="";
 }