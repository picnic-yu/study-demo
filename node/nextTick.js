// nextTick  把回调函数放在当前执行栈的底部
// setImmediate 把回调函数放在事件队列的尾部
function read (){
    setImmediate(function(){
        console.log(1);
        process.nextTick(function(){
            console.log(2)
            process.nextTick(function(){
                console.log(3)
            })
        })
    })
}
read();//1 2 3 