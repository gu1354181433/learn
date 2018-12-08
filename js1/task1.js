




function startBtn() {
    var x = Math.random()*10;
    var y = Math.round(x);
	console.log(y);
	for (;y==10||y==0;) {
		var x = Math.random()*10;
		var y = Math.round(x);
        console.log(y);
    }
    var a = Math.random()*10;
    var b = Math.round(a);
	console.log(b);
	for (;b==10||b==0;) {
		var a = Math.random()*10;
		var b = Math.round(a);
        console.log(b);
    }
    var e = Math.random()*10;
    var d = Math.round(e);
	console.log(d);
	for (;d==10||d==0;) {
		var e = Math.random()*10;
		var d = Math.round(e);
        console.log(d);
    }
    for(;y==b||y==d;){
        var x = Math.random()*10;
        var y = Math.round(x);
        console.log(y);
        for (;y==10||y==0;) {
            var x = Math.random()*10;
            var y = Math.round(x);
            console.log(y);
        }
    }
    for(;b==d||b==y;){
        var a = Math.random()*10;
        var b = Math.round(a);
	console.log(b);
	for (;b==10||b==0;) {
		var a = Math.random()*10;
		var b = Math.round(a);
        console.log(b);
    }
    }
    var                     z                              = "grid"+y;
    var                     c                              = "grid"+b;
    var                     f                              = "grid"+d;
    document.getElementById("grid1").style.backgroundColor = "#ffa500";
    document.getElementById("grid2").style.backgroundColor = "#ffa500";
    document.getElementById("grid3").style.backgroundColor = "#ffa500";
    document.getElementById("grid4").style.backgroundColor = "#ffa500";
    document.getElementById("grid5").style.backgroundColor = "#ffa500";
    document.getElementById("grid6").style.backgroundColor = "#ffa500";
    document.getElementById("grid7").style.backgroundColor = "#ffa500";
    document.getElementById("grid8").style.backgroundColor = "#ffa500";
    document.getElementById("grid9").style.backgroundColor = "#ffa500";
    document.getElementById(z).style.backgroundColor       = "red";
    document.getElementById(c).style.backgroundColor       = "red";
    document.getElementById(f).style.backgroundColor       = "red";
}
function stopBtn(){
    document.getElementById("grid1").style.backgroundColor = "#ffa500";
    document.getElementById("grid2").style.backgroundColor = "#ffa500";
    document.getElementById("grid3").style.backgroundColor = "#ffa500";
    document.getElementById("grid4").style.backgroundColor = "#ffa500";
    document.getElementById("grid5").style.backgroundColor = "#ffa500";
    document.getElementById("grid6").style.backgroundColor = "#ffa500";
    document.getElementById("grid7").style.backgroundColor = "#ffa500";
    document.getElementById("grid8").style.backgroundColor = "#ffa500";
    document.getElementById("grid9").style.backgroundColor = "#ffa500";
    
}











