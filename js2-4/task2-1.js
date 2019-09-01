
function Open(){
    window.location.href = 'task2-2.html';
}
$(function(){
    $(".three-bars").toggle(
        function(){$(".left-set").css("left","0");$(".content-main").css("left","50%");},
        function(){$(".left-set").css("left","-50%");$(".content-main").css("left","0");}
        );

})
function point(){
    function kkk(x){
        this.a = 37+x;
      }
      
      var o = new kkk(2);
      var k = new kkk(3)
      console.log(o.a); // logs 37
      
      function C2(c){
        this.b = c+37;
        return c;
      }
      
      var b = new C2(1);
      console.log(b); // logs 38
}