var ID     = JSON.parse(sessionStorage.getItem("ID"));
var people = JSON.parse(sessionStorage.getItem("people"));
var a      = ID.length;


$(function(){
    for(var i=0;i<a;i++){
        $(".content-main").prepend(`<div class=" element d-flex justify-content-center col-4">
        <div class="content-box">
            <div class=" identity align-items-center justify-content-center">`+ID[(a-i-1)]+`</div>
            <div class="number align-items-center justify-content-center">`+(a-i)+`号</div>
            <img class="skill" src="skill.png" width="115%" alt="">
        </div>
    </div>`)
    }
    for(var n=0;n<a;n++){
        if(people[n].death){
            $(".content-box").eq(n).css("background","red");
        }
    }
})
function sure(){
    window.location.href = "task2-5.html";
}