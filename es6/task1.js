let c=3;
function on(){
    var a = [];
    for (var i = 0; i < 10; i++) {
        
        a[i] = function(){
            console.log(i);
        };
    }
    a[6]();
}
function die(){
    tmp = 10;

if (true) {

  let tmp;
  console.log(tmp);
}
console.log(tmp);

}

function Close(){
    const a = [];
    a.push('Hello'); // 可执行
    console.log(a);
    console.log(c) 
}
function change(){
    // const [a, b, c, d, e] = 'hello';
    // console.log(a,b,c,d,e);
    function example() {
        return [1, 2, 3];
      }
      var [a, b, c] = example();
      console.log([a,b,c]);
}
function ren(){
    // function Point(x = 0, y = 0) {
    //     this.x = x;
    //     this.y = y;
    //   }
      
    //   var p = new Point();
    //   console.log(p)
    // /
    // function foo([x,y=2]) {
    // console.log(x, y);
    // }
    // foo([2])
    // 2
    // var x = 1;

    // function f(x, y = x) {
    // console.log(y);
    // }
    // f();
    function add(...values) {
        let sum = 0;
      
        for (var val of values) {
         sum = sum+ val;
        }
        console.log(sum);
      }
      add(2,3,5);
      
}
function Fun() {  
    const full = ({ first, last }) => first + ' ' + last;
    let   x    = {first:"name", last:"foo"};
    console.log(full(x));
}
function map(){
    var myMap = new Map();
 
    var keyString = "a string",
        keyObj    = {},
        keyFunc   = function () {};
    
    // 设置值
    myMap.set(keyString, "value 与 'a string' 关联");
    myMap.set(keyObj,keyString );
    myMap.set(keyFunc, "value 与 keyFunc 关联");
    
    myMap.size; // 3
    
    // 获取值
    console.log(myMap.get(keyString));    // "value 与 'a string' 关联"
    console.log(myMap.get(keyObj));       // "value 与 keyObj 关联"
    myMap.get(keyFunc);      // "value 与 keyFunc 关联"
}
function reward(){
    var x = Math.round(Math.random());
    var y = ["买","不买"];
    var z = [1,2];
    console.log(z[x]);
    console.log(y[x]);
}













