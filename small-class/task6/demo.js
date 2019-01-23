var arr=[2,4,6,8,10];
function myEvery(){
   var x = arr.every((value, index, array) =>{console.log("value="+value+",index="+index+",array="+array);return value>8;} );
   console.log(x);
}
function mySome(){
    var y = arr.some((value, index, array) =>{console.log("value="+value+",index="+index+",array="+array);return value>6;} );
    console.log(y);
}
function myFilter(){
    var z = arr.filter((value, index, array) =>{console.log("value="+value+",index="+index+",array="+array);return value>4;} );
    console.log(z);
}
function myMap(){
    var m = arr.map((value, index, array) =>{console.log("value="+value+",index="+index+",array="+array);return value*2;} );
    console.log(m);
}
function myForEach(){
    var f = arr.forEach((value, index, array) =>{console.log("value="+value+",index="+index+",array="+array);return value>1;} );
    console.log(f);
}
function mySame(){
    var a = [3,5,6,8,9];
    var b = [2,3,8];
    var c = a.filter(item=>{return b.indexOf(item)>=0});
    console.log(c);
}














