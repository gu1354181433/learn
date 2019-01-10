var ID = JSON.parse(sessionStorage.getItem("ID"));
var a = ID.length;
$(function(){
    console.log(ID);
    for(var i=0;i<a;i++){
        $(".content-main").prepend(`<div class=" element d-flex justify-content-center col-4">
        <div class="content-box">
            <div class=" identity align-items-center justify-content-center">`+ID[(a-i-1)]+`</div>
            <div class="number align-items-center justify-content-center">`+(a-i)+`号</div>
            <img class="skill" src="skill.png" width="115%" alt="">
        </div>
    </div>`)
    }
})
$(function(){
    $(".header-left").click(function(){
        window.location.href = "task2-2.html";
    })
})
function autoPlay() {
    var myAuto        = document.getElementById('bgMusic');
    var btn           = document.getElementById('audioBtn');
        myAuto.volume = 0.2;
    if (myAuto.paused) {
        myAuto.play();
        btn.classList.remove("pause");
        btn.classList.add("play");
    } 
    else {
        myAuto.pause();
        btn.classList.remove("play");
        btn.classList.add("pause");
     }
}
$(function(){
    $(".header-right").click(function(){
        //chrome不兼容
        window.opener = null;
        window.open('','_self');
        window.close();
        
    })
})
function start(){
    $(".identity").css({"background-image":"none","font-size":"4vw"});
    $(".kill").remove();
    $(".footer").append(`<a class="btn kill align-items-center justify-content-center" onclick="sure()">确定</a>`)
}
function sure(){
    var day     = 1;
    var checked = [];
    var killK   = [];
    var killC   = [];
    var dayTime = 0;
    var people  = [];
                    for(var i=0;i<a;i++){
                        var key = {"name":ID[i],"death":false};
                        people.push(key);
                    }
                    sessionStorage.setItem("people",JSON.stringify(people));
    sessionStorage.setItem("dayTime",JSON.stringify(dayTime));
    sessionStorage.setItem("killK",JSON.stringify(killK));
    sessionStorage.setItem("killC",JSON.stringify(killC));
    sessionStorage.setItem("day",JSON.stringify(day));
    sessionStorage.setItem("checked",JSON.stringify(checked));
        window.location.href = "task2-5.html";
}























