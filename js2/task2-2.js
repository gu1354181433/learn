//取id函数
function $(id){
    return document.getElementById(id);
}
//左上跳转页
function Open(){
    window.location.href = 'task2-1.html';
}
//点击设置
var ID;
function set(){
   var a = $("num").value;
   if(a<4||a>18){
    alert("请输入数字4~18");
   }
   //分配杀手人数和平民人数
    else{
        var b                      = Math.floor(a/3);
        $   ("killer").innerHTML   = b;
        $   ("civilian").innerHTML = a-b;
        var arr                    = [];
        //根据总人数生成数组 arr
        for(var i=0;i<a;i++){
            arr.push(i+1);
        }
        //声明数组copy 用洗牌算法将arr元素全部交给copy
        var copy = [];
        var n    = arr.length;
        var k;
        while(n){
            var k = Math.floor(Math.random()*n--);
            copy.push(arr.splice(k,1)[0]);
        }
        //将copy数组信息传给两个变量
        //b代表杀手人数剩下就是平民人数
        var kNum  = "";
        var pNum  = "";
        var kList = [];
        var pList = [];
        for(var y=0;y<a;y++){
            if(y<b){ 
                var kNum = copy[y];
                kList.push(kNum);
            }
            else{
                var pNum = copy[y];
                pList.push(pNum);
            }
        }
        kList.sort(function(a,b){return a-b});
        pList.sort(function(a,b){return a-b});
        //上面只生成了数字，并且排了序，下面添加字符串
            var kNum = "";
            var pNum = "";
        for(var f=0;f<pList.length;f++){
            if(f<b){ 
                var kNum = kNum+ kList[f]+"号"+" ";
                var pNum = pNum+ pList[f]+"号"+" ";
            }
            else{
                var pNum = pNum+ pList[f]+"号"+" ";
            }
        }
        $("kNum").innerHTML = kNum;
        $("pNum").innerHTML = pNum;
        console.log(kNum);
        console.log(pNum);
        ID        = [];
        ID.length = a;
        for (var I=0;I<a;I++){
            var D = copy[I]-1;
            if(I<b){
                ID [D] = "杀手";
            }
            else{
                ID[D] = "平民"
            }
        }
        console.log(ID);
    }
    var session = JSON.stringify(ID);
    sessionStorage.setItem("ID",session);

    
}

//获取输入人数 并限制同步到滑动条
function testNum(){
    var x = $("num").value;
    if(x>3&x<19){
        $("length").value = x;
    }    
}
//获取滑动条数据 同步到输入框
function lengthNum(){
    var z             = $("length").value;
    $   ("num").value = z;
}
//加减号同步到滑动条和输入框
function minus(){
    var down = $("length").value;
    down--;
    if(down>3){
        $("length").value = down;
        $ ("num").value   = down;
    }
    else{
        alert("人太少了");
    }
}
function plus(){
    var up = $("length").value;
    up++;
    if(up<19){
        $("length").value = up;
        $ ("num").value   = up;
    }
    else{
        alert("人太tm多了");
    }
}
function text(){
    var uname   = $("uname").value;
    var kname   = $("kname").value;
    var nameArr = [];
    nameArr.push(uname);
    nameArr.push(kname);
    sessionStorage.setItem("word",(JSON.stringify(nameArr)));
}
function check(){
    var uname = $("uname").value;
    var kname = $("kname").value;
    if(!/^[\u4e00-\u9fa5]+$/g.test(uname)||!/^[\u4e00-\u9fa5]+$/g.test(kname)||kname==uname) {
        if(kname==uname){
            alert("词组不能相同");
        }
        else{
            alert("请输入汉字");
        }
    }
    else{
        text();
        if(ID==undefined){
            set();
        }
        window.location.href = 'task2-3.html';
    }
}




















