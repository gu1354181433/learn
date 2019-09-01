var y = "#ffa500";
function startBtn() {
    console.time("timer");
   function randomx() { 
       var x = 0;
       for(;x==10||x==0;) {
            var x = Math.round(Math.random()*10);
       }
       return x;  
   }
   var Arr = [];
   while(Arr.length<3){
       var aa    = "grid"+randomx();
       var onoff = true;
       for(var i=0;i<Arr.length;i++) {
           if (Arr[i]==aa){
               onoff = false;
               break;
           }
           else {
               onoff = true;
           }
           
           console.log(Arr[i]);
       }
       console.log(onoff);
       if(onoff){
           Arr.push(aa);
       }
   }
   for(var c=1;c<10;c++) {
       var                     b                        = "grid"+c;
       document.getElementById(b).style.backgroundColor = y;
   }
   function colorF(){
       var color = "#";
       for(var s=0;s<3;s++){
            var r = Math.round(Math.random()*255);
            if(r<=15){
                var color = color+"0"+r.toString(16);
            }
            else{
                var color = color+r.toString(16);
            }
            console.log(color);
        }
        return color;
    }
   var colorS = [];
   while(colorS.length<3){
       var xx    = y;
       var coBln = true;
       for(;xx==y;){
            var xx = colorF();
       }
       for(var n=0;n<colorS.length;n++){
           if(colorS[n]==xx){
               var coBln = false;
               break;
           }
           else{
               var coBln = true;
           }
       }
       if(coBln){
           colorS.push(xx);
       }
       console.log(colorS);
   }
   
   for(var a=0;a<3;a++) {
    document.getElementById(Arr[a]).style.background = colorS[a];
    console.log(Arr);
    console.log(Arr[a]);    
   }
   console.timeEnd("timer");
}
var stop;
function Start(){
    clearInterval(stop);
   stop = setInterval('startBtn()',500);
}
function stopBtn(){
    clearInterval(stop);
    for(var c=1;c<10;c++) {
        var                     b                        = "grid"+c;
        document.getElementById(b).style.backgroundColor = y;
    }  
}
  

function demo(){
    console.log(this)
}







