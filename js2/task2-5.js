
var day     = JSON.parse(sessionStorage.getItem("day"));
var checked = JSON.parse(sessionStorage.getItem("checked"));
var dayTime = JSON.parse(sessionStorage.getItem("dayTime"));
var a       = checked.length;



console.log(day);
console.log(checked)

var Days = ["第一天","第二天","第三天","第四天","第五天","第六天","第七天","第八天"];
$(function(){
    $(".content").append(
         ` <h4 class="day">`+Days[day-1]+`</h4>
    <div class="main d-flex flex-column align-items-center">
        <img src="moon.png" alt="" width="30px" class="moon">
        <img src="sun.png" alt="" width="30px" class="sun">
        <!-- 杀人按钮 -->
        <button type="button" class="btn btn-info button"id="`+(4*day-4)+`">
            杀手杀人
            <div class="triangle"></div>
        </button>
        <!-- 死者遗言 -->
        <button type="button" class="btn btn-info button"id="`+(4*day-3)+`" >
            死者发表遗言
            <div class="triangle"></div>
        </button>
        <!-- 玩家发言 -->
        <button type="button" class="btn btn-info button"id="`+(4*day-2)+`">
            玩家轮流发言
            <div class="triangle"></div>
        </button>
        <!-- 投票按钮 -->
        <button type="button" class="btn btn-info button"id="`+(4*day-1)+`">
            投票
            <div class="triangle"></div>
        </button>
    </div> `
    )
    for(var i=4*(day-1);i<a;i++){
        var ii = "#"+i;
        $(ii).removeClass("btn-info");
        $(ii+">.triangle").addClass("gray");
        
    }
})
$(function(){
    $(".button").click(function () { 
        var id = $(this).attr("id");
        var a  = checked.length;
        
        if(id<a||id>a){
            alert("请按顺序点击");
        }
        else{
            checked.push(id);
            $(this).removeClass("btn-info");
            $(this).find(".triangle").addClass("gray");
            console.log(a);
            sessionStorage.setItem("checked",JSON.stringify(checked));
            if(id==4*day-4){
                if(id==0){
                    var ID     = JSON.parse(sessionStorage.getItem("ID"));
                    var k      = ID.length;
                    var people = [];
                    for(var i=0;i<k;i++){
                        var key = {"name":ID[i],"death":false};
                        people.push(key);
                    }
                    sessionStorage.setItem("people",JSON.stringify(people));
                }
                var w = "killer";
                sessionStorage.setItem("w",w);
                window.location.href = "task2-kill.html";
            }
            if(id==(4*day-3)){
                alert("死者发表遗言");
            }
            if(id==(4*day-2)){
                alert("玩家发言");
            }
            if(id==(4*day-1)){
                dayTime++;
                var w = "vote";
                sessionStorage.setItem("w",w);
                sessionStorage.setItem("dayTime",JSON.stringify(dayTime));
                window.location.href = "task2-kill.html";
            }
            
            
        }
    });
})
function kill(){
    window.location.href = "task2-kill.html";
}

function back(){
    window.location.href = "task2-2.html";
}







































