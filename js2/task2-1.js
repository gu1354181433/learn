
function Open(){
    window.location.href = 'task2-2.html';
}
$(function(){
    $(".three-bars").toggle(
        function(){$(".left-set").css("left","0");$(".content-main").css("left","50%");},
        function(){$(".left-set").css("left","-50%");$(".content-main").css("left","0");}
        );

})