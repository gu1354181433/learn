var killC = JSON.parse(sessionStorage.getItem("killC"));
console.log(killC);
var killK = JSON.parse(sessionStorage.getItem("killK"));
console.log(killK);
var words = JSON.parse(sessionStorage.getItem("words"));
console.log(words);
var day          = JSON.parse(sessionStorage.getItem("day"));
var dayTime      = JSON.parse(sessionStorage.getItem("dayTime"));
var Winner       = JSON.parse(sessionStorage.getItem("Winner"));
var winnerPeople = ["平民胜利","杀手胜利"];
var ID           = JSON.parse(sessionStorage.getItem("ID"));
var a            = ID.length;
var Days         = ["第一天","第二天","第三天","第四天","第五天","第六天","第七天","第八天"];
var kp           = Math.floor(a/3);
var cp           = a-kp;
$(function(){
    for(var i=0;i<day;i++){
        var cc = killC[i];
        var kk = killK[i];
        if(cc==undefined){
            $(".footer").before(
                `<div class="content-end">
                <div class="head"> <h3>`+Days[i]+`</h3><span class="word-right">0小时07分</span> </div>
                <p class="flow-path">晚上：`+kk+`号被杀手杀死，`+kk+`号是水民</p>
                </div>` 
            )
        }
        else{
            $(".footer").before(
                `<div class="content-end">
                <div class="head"> <h3>`+Days[i]+`</h3><span class="word-right">0小时07分</span> </div>
                <p class="flow-path">晚上：`+kk+`号被杀手杀死，`+kk+`号是水民</p>
                <p class="flow-path">白天：`+cc.num+`号被全民投票投死，`+cc.num+`号是`+cc.player+`</p> 
                </div>`
            )
        }
        
    }
    if(Winner==1){
        $(".win-word").text(`太棒了！你知道么？在捉鬼游戏中只有20%的杀手取得游戏最终的胜利哦！`)
    }
    else{
        $(".win-word").text(`本轮游戏共抓到杀手`+kp+`人，共经历了`+dayTime+`个白天，在杀人游戏中击败了65%的玩家！`)
    }
    $(".winner").text(winnerPeople[Winner]);
    $("#peoples").html(`杀&nbsp &nbsp &nbsp手`+kp+`人 &nbsp &nbsp&nbsp 平&nbsp&nbsp&nbsp 民`+cp+`人 `);
    $("#kill-word").text(`杀手词汇:`+words[1]);
    $("#civ-word").text(`平民词汇:`+words[0]);
})
$(function(){
    $(".house").click(function(){
        window.location.href = "task2-1.html";
    })
})





























