var x=document.getElementsByTagName("input");
function myFunction(){
    let f=0;
    for(var i=0;i<x.length;i++){
        if(x[i].hasAttribute('required') && x[i].value==""){
            f=1;
            x[i].style.border="solid 2px red";
        }
        else{
            x[i].style.border="none";
            x[i].style.borderBottom="solid 1px";
        }
    }
    if(f==1){
        alert("Please fill out all the required fields");
        f=0;
    }
    else{
        alert("Your order has been placed")
        location.reload();
    }
}
var y=document.getElementsByTagName("div");
for(var j=0;j<y.length;j++){
    alert(i);
}