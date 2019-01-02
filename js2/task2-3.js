//简化dom节点函数
function $(id){
    return document.getElementById(id);
}
//左上角跳转
function back(){
    window.location.href = "task2-2.html";
}

//全局变量 i用于判断开关
var i = 0;
var a = 0;
//查看视图
function look(){
    var Num    = $("Num");
    var Open   = $("Open");
    var role   = $("role");
    var Danger = $("danger");
    var see    = $("see");
    var word   = $("word");
    var ID     = JSON.parse(sessionStorage.getItem("ID"));
    var words  = JSON.parse(sessionStorage.getItem("word"));
    //显示视图
    if(i==0){   
        Num.innerHTML      = a+1;
        Open.style.display = "block";
        //身份
        role.innerHTML = ID[a];
        //按钮文字
        if(a+1==ID.length){
            see.innerHTML = "隐藏并传给法官";
        }
        else{
            see.innerHTML = "隐藏并传给"+ (a+2)+"号";
        }
        //词组 和 相关提示
        if(ID[a]=="杀手"){
            word.innerHTML   = words[1];
            Danger.innerHTML = "想办法猜到别人的词组，同时要注意不要暴露自己";
        }
        else{
            word.innerHTML   = words[0];
            Danger.innerHTML = "找到与你词组不一样的人";
        }
        console.log(a); 
        i++;
        a++;
    }
    //隐藏视图
    else{
        //查看结束 跳转
        if(a>ID.length){
            window.location.href = "task2-4.html";
        }
        else{
            //查看结束 按钮文字
            if(a==ID.length){
                see.innerHTML      = "法官日记";
                Num.innerHTML      = a;
                Open.style.display = "none";
                a++;
            }
            //隐藏后 按钮文字
            else{
                see.innerHTML      = "查看"+ (a+1)+"号身份";
                Num.innerHTML      = a+1;
                Open.style.display = "none";
                i--;
            }
        }
    }
    console.log(ID);
    console.log(i);
}




























