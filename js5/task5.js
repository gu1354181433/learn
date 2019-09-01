



// $(function () {
//     $(".login-btn").click(function () {  
//         var u = $("#user").val();
//         var p = $("#psd").val();
//         console.log(u);
//         console.log(p);
//         $.ajax({
//             type : "post",
//             url  : "/carrots-admin-ajax/a/login",
//             data : {name:u,psw:p},
//             async: true,
//             error: function(){ 
//                 alert("1");
//             },
//             success: function(){
//                 alert("132");
//             }
//         });
//     })
// })
function fuck(){
    var u = $("#user").val();
    var p = $("#psd").val();
    if(u==""){
        alert("用户名不能为空");
    }
    else{
        if(p==""){
            alert("密码不能为空");
        }
        else{
            var x                    = new XMLHttpRequest();
                x.onreadystatechange = function(){
            if (x.readyState==4 && x.status==200)
            {
                var response = JSON.parse(x.responseText);
                console.log(response);
                if(response.message=="用户不存在"||response.message=="密码错误"){
                    alert("密码错误")
                }
                else{
                    if(response.message=="success"){
                        // window.location.href = "http://dev.admin.carrots.ptteng.com/#/dashboard";
                    }
                }
                
            }   
         }
        x.open("POST","/carrots-admin-ajax/a/login",true);
        x.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        x.send("name="+u+"&pwd="+p);
        }
    }
   
}



































