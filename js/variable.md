#js中使用typeof得到的类型
``` typeof 只能区别值类型  引用类型无法区分其他 只能区分函数
    typeof undefined // undefined
    typeof 'w' //string
    typeof 1 //number
    typeof true // boolean
    typeof {} //object
    typeof [] // object
    typeof null // object
    typeof console.log // function

```

##变量类型分为值类型和引用类型
* 值类型
```
    var a = 100;
    var b = a;
    a = 200
    console.log(b) //100
```
* 引用类型   对象 数组 函数 特点存放内存的是指针引用
```
    var a = {
        age:20
    }
    var b = a;
    b.age = 21;
    console.log(a.age);//21
```

* 变量计算 强制类型转换
1. 字符串拼接
```
var a = 100 + 10;//110
var b = 100 + '10'//10010
```
2. == 运算符
```
100 == '100' //true
0 == '' // true
null == undefined // true
```
3. if语句
```
 b = 10 
 if(b){

 }
```
4. 逻辑运算
```
10 && 0 //false
var c = 10;
c = !c;//false
```




