//获取身份数据以及死亡状态
var ID     = JSON.parse(sessionStorage.getItem("ID"));
var people = JSON.parse(sessionStorage.getItem("people"));
var w      = sessionStorage.getItem("w");
var a      = ID.length;
var Words  = {
    killer: ["杀手杀人","杀手请睁眼，杀手请选择要杀的对象。","点击下方玩家头像，对被杀的人进行标记。","杀手","请选择要杀的人",1],
    vote  : ["投票","发言讨论结束，请大家投票","点击得票数最多的人头像","","请选择得票数最多的人",0]
};
var word = Words[w];
console.log(word);
$(function(){
    console.log(ID);
    //根据身份数据添加玩家方块
    for(var i=0;i<a;i++){
        $(".content-main").prepend(`<div class=" element d-flex justify-content-center col-4">
        <div class="content-box">
            <div class=" identity align-items-center justify-content-center">`+ID[(a-i-1)]+`</div>
            <div class="number align-items-center justify-content-center">`+(a-i)+`号</div>
            <img class="skill" src="skill.png" width="115%" alt="">
        </div>
    </div>`)
    }
    //给已死亡玩家变色
    for(var n=0;n<a;n++){
        if(people[n].death){
            $(".content-box").eq(n).css("background","red");
        }
    }
    //更改标题 提示文字
    $(".header-middle").text(word[0]);
    $(".music-word").text(word[1]);
    $(".top-word").text(word[2]);
})
console.log(people);
var po;
//点击玩家时判断
$(function(){
    $(".content-box").click(function(){
        //获取玩家位置
        po = $(this).parent(".element").index();
        //确认玩家状态和身份
        if(people[po].death){
            alert("他已经死了");
        }
        //重置red类名颜色
        else{
            if(ID[po]==word[3]){
                //防止选择存活平民后再次点击杀手，而重置所有颜色
                $(".content-box").removeClass("red");
                alert("是友军");
            }
            else{
                //正确选择 先重置再上色
                $(".content-box").removeClass("red");
                $(this).addClass("red");
            }
        }
        console.log(po);
    })
    
})
//音乐插件
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
//确定按钮
function sure(){
        //排除未选择、同类、已死亡
        if(po==undefined||ID[po]==word[3]||people[po].death){
            alert(word[4]);
        }
        else{
            //游戏胜利条件
            if(word[5]==1){
                var killK = JSON.parse(sessionStorage.getItem("killK"));
                killK.push(po);
                sessionStorage.setItem("killK",JSON.stringify(killK));
            }
            else{
                var killC = JSON.parse(sessionStorage.getItem("killC"));
                killC.push({num:po,player:ID[po]});
                console.log(killC);
                sessionStorage.setItem("killC",JSON.stringify(killC));
            }
            people[po].death = true;
            var    killer    = 0;
            var    civ       = 0;
            for(var k=0;k<a;k++){
                if(people[k].death){
                   console.log(k);
                }
                else{
                    if(ID[k]=="杀手"){
                        killer++;
                    }
                    else{
                        civ++;
                    }
                }
            }
            if(killer==0||killer==civ){
                if(killer==0){
                    var Winner = 0;
                }
                else{
                    var Winner = 1;
                }
                sessionStorage.setItem("Winner",JSON.stringify(Winner));
                alert("游戏结束");
                window.location.href = "task2-6.html";
            }
            else{
                //给people传参跳转
                if(word[5]==0){
                    var day = JSON.parse(sessionStorage.getItem("day"));
                    day++;
                    sessionStorage.setItem("day",JSON.stringify(day));
                }
                sessionStorage.setItem("people",JSON.stringify(people));
                window.location.href = "task2-5.html";
            }
            
        }
}






























