var ID = JSON.parse(sessionStorage.getItem("ID"));
var a = ID.length;
$(function(){
    console.log(ID);
    for(var i=0;i<a;i++){
        $(".top-word").after(`<div class=" element d-flex justify-content-center col-4">
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
function start(){
    $(".identity").css({"background-image":"none","font-size":"4vw"});
    $(".header-middle").text("杀手杀人");
    $(".music-word").text("杀手请睁眼，（杀手请告诉法官是否杀人）杀手请选择要杀的对象");
    $(".kill").remove();
    $(".footer").append(`<a class="btn kill align-items-center justify-content-center" onclick="sure()">确定</a>`)
}
























