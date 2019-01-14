$(function(){
    $(".url").click(function () { 
        var url = location.search;
        console.log(url); //获取url中"?"符后的字串  
        var Data = new Object();
        if (url.indexOf("?") != -1) {//检索？的位置 -1为不存在  
            var str = url.substr(1);  //从括号标出位置向后抽取字符串-1是倒数第一个
            console.log(str);
                strS = str.split("&");  //将字符串分割成数组，就是在指定位置替换成逗号
                console.log(strS);
        for(var i = 0; i < strS.length; i ++) {  
         Data[strS[i].split("=")[0]] = unescape(strS[i].split("=")[1]);  //unescape是对选取的字符进行再解析
      }  
   }  
   alert(Data);
   console.log(Data); 
    });
})
$(function(){
    $(".local").click(function(){
        var localName = $("#name").val();
        var localAge  = $("#age").val();
        localStorage.setItem("name",localName);
        localStorage.setItem("age",localAge);
    })
})
$(function(){
    $(".l-hold").click(function(){
        var name = localStorage.getItem("name");
        var age  = localStorage.getItem("age");
        var n    = "姓名："+name;
        var a    = "年龄："+age;
        alert(n+a);
    })
})
$(function(){
    $(".session").click(function(){
        var sessionName = $("#name").val();
        var sessionAge  = $("#age").val();
        sessionStorage.setItem("name",sessionName);
        sessionStorage.setItem("age",sessionAge);
    })
})
$(function(){
    $(".s-hold").click(function(){
        var name = sessionStorage.getItem("name");
        var age  = sessionStorage.getItem("age");
        var n    = "姓名："+name;
        var a    = "年龄："+age;
        alert(n+a);
    })
})
$(function(){
    $(".cookie").click(function(){//要先开 nginx 网络环境 还要引入特定cookie jq插件
        var Name = $("#name").val();
        var Age  = $("#age").val();
        $.cookie('name', Name, { expires: 7, path: '/' });
        $.cookie('age', Age, { expires: 7, path: '/' });
    })
})
$(function(){
    $(".c-hold").click(function(){
      var name = $.cookie('name');
      var age  = $.cookie('age');;
        alert(name+":"+age);
    })
})
























