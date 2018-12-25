# 作用域和闭包
```
fn()//报错
var fn = function(){

}

因为作用域问题 先声明fn 变量提升 在调用的时候fn还是undefined
```


> 执行上下文
```
    console.log(a)//undefined  因为变量提升
    var a = 100;
```
1. 范围：一段<script>或者一个函数
2. 全局：变量定义、函数声明
3. 函数：变量定义、函数声明、this、arguments


# this
> this 要在执行时候才能确认值，谁调用指向谁
```
    var a = {
        name:'a',
        fn:function(){
            console.log(this.name)
        }
    }
    a.fn(); // this === a;
    a.fn.call({
        name:'b'
    })//this === {name:'b'}   //call改变this指向

    var fn1 = a.fn
    fn1();//this === window

```


