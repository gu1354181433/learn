function way1() {
    console.time("timer");
    for(var i=0;i<100000;i++){
        var a, b, c;
        var a     = parseInt(255 - Math.random() * 255).toString(16);
        var b     = parseInt(255 - Math.random() * 255).toString(16);
        var c     = parseInt(255 - Math.random() * 255).toString(16);
        var color = '#' + a + b + c;
    } 
    document.getElementById("one").style.background = color;
    console.timeEnd("timer");
    console.log(color);
}   
function way2() {
    console.time("timer");
    for(var i=0;i<100000;i++){
        var color2 = "#";
        for(var s=0;s<3;s++){
            var r = Math.floor(Math.random()*256);
            if(r<=15){
                var color2 = color2+"0"+r.toString(16);
            }
            else{
                var color2 = color2+r.toString(16);
            }
        }
        
    }
    document.getElementById("tow").style.background = color2;

    console.timeEnd("timer");
    console.log(color2);
}

function way3() {
    console.time("timer");
    for(var i=0;i<100000;i++){
        var num= 167772.6215>>0 ;           
        /*  console.log(num);  */      
        var color3 = "#"+("00000"+((Math.random()*16777216)>>0).toString(16)).slice(-6);
        
    }
        document.getElementById("three").style.background = color3;
    console.timeEnd("timer");
    console.log(color3);
}

function way4(){
    console.time("timer");
    for(var i=0;i<100000;i++){
    var color4 = ""
    for(var a=0;a<6;a++){
       var color4 = color4 + "0123456789abcdef"[Math.floor(Math.random()*16)];
       
    }
    
    }
    document.getElementById("four").style.background = "#"+color4;
    console.timeEnd("timer");
    console.log(color4);
}
      

/*    function way4(){

   // console.time("timer");
     function color4(){
    return "#"+(function(color4){
        
        return(color4+="0123456789abcdef"[Math.floor(Math.random()*16)])&&(color4.length==6)?
        color4: arguments.callee(color4);
        
    })("");
   } 
   


document.getElementById("four").style.background = color4();
//console.timeEnd("timer");
} */


//数组中随机取一个元素
//var Arr=[0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f];
//var a= Math.floor((Math.random()*Arr.length));
// alert(Arr[a]);

function way5(){
     console.time("timer");
    for(var i=0;i<100000;i++){
    var r      = Math.floor(Math.random()*256);
    var g      = Math.floor(Math.random()*256);
    var b      = Math.floor(Math.random()*256);
    var color5 = "rgb("+r+','+g+','+b+")";
    
    }
    document.getElementById("five").style.background = color5;
    console.timeEnd("timer");
    console.log(color5);
}
function way6(){
      console.time("timer");
    for(var i=0;i<100000;i++){
    var h      = Math.floor(Math.random()*361);
    var s      = Math.floor(Math.random()*101)+"%";
    var l      = Math.floor(Math.random()*101)+"%";
    var color6 = 'hsl('+h +','+ s +','+ l +')';
    }
    console.log(color6);
    document.getElementById("six").style.background = color6;
     console.timeEnd("timer");
}
function num(){
    var bb = Math.random()*10;
    var aa = Math.round(bb);
    bb>0.4==0
    0.5-1.4==1
    >9.5==10
}












