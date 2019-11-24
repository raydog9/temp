 var a,b,c,d,r,s,t,arry=[],may=[],ray=[],say=[];
 var bo1=document.getElementById("bo1"); 
 var bo2=document.getElementById("bo2");
 var bo3=document.getElementById("bo3");
 var bo4=document.getElementById("bo4");

 inp1.addEventListener("input",fun1);
 inp2.addEventListener("input",fun1);
 bu2.addEventListener("click",fun2);

 function fun1() {
    one=inp1.value;
    two=inp2.value;
        var rand=Math.floor(Math.random() *10);
        bo1.innerHTML=one;
        bo2.innerHTML=rand;
    if (rand == one) {
        a="right";
    }
    else {
        a="wrong";
    }
    bo3.innerHTML=a;
 }
 function fun2() {
    bo1.innerHTML="";
    bo2.innerHTML="";
    inp1.value="";


}
