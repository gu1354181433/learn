
$(function(){
    $(".way1").click(function() {
        var ARR  = [1,2,3,4,5,6,7,8,9,10];
        var copy = [],
            n    = ARR.length,
            i;
        // 如果还剩有元素则继续。。。
        while (n) {
            // 随机抽取一个元素
            i = Math.floor(Math.random() *  ARR.length);
            // 如果这个元素之前没有被选中过。。
            if (i in    ARR) {
                copy.push(  ARR[i]);
                delete  ARR[i];
                n--;
            }
        }
        console.log(copy);
        return copy;
    })
})
$(function(){
    $(".way2").click(function() {
        var ARR  = [1,2,3,4,5,6,7,8,9,10];
        var copy = [],
            n    = ARR.length,
        i;
    // 如果还剩有元素。。
    while (n) {
        // 随机选取一个元素
        i = Math.floor(Math.random() * n--);
        // 移动到新数组中
        copy.push(ARR.splice(i, 1)[0]);
    }
    console.log(copy);
    return copy;
    })
})
$(function(){
    $(".way3").click(function() {
        var ARR = [1,2,3,4,5,6,7,8,9,10];
        var m   = ARR.length,
        t, i;
    // 如果还剩有元素…
    while (m) {
        // 随机选取一个元素…
        i = Math.floor(Math.random() * m--);
        // 与当前元素进行交换
                                    t  = ARR[m];
                                ARR[m] = ARR[i];
                                ARR[i] = t;
    }
    console.log(ARR);
    return ARR;
    })
})
$(function(){
    $(".way4").click(function() {
        var ARR = [1,2,3,4,5,6,7,8,9,10];
        ARR.sort(function() {
            
            return Math.random() - 0.5
        });
        console.log(ARR);
    })
})




































