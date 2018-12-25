#构造函数

```
    function Foo(name,age){
        this.name = name;
        this.age = age;
        this.class = 'clas'
    }

    var f = new Foo('terrry',20);
    new的过程 把this制空，然后给值  return this 最后给f  这样f.name 就有值了
```

#构造函数扩展
```
function Foo(){}其实是var Foo  = new Function()
```
#原型规则和例子
> 所有的引用类型都具有对象特性，即可自由扩展属性
```
var obj = { }; obj.a = 100;
var arr = []; arr.a = 100;
```
> 所有的引用类型都有一个__proto__属性（隐士原型），属性是一个普通对象
```
var obj = { }; obj.a = 100;
var arr = []; arr.a = 100;
console.log(obj.__proto__)
console.log(arr.__proto__)
```
> 所有的函数都有一个prototype属性，（显示原型）属性是一个普通对象

> 所有的引用类型（数组对象函数）,__proto__属性指向他的构造函数的prototype属性值

> 当试图得到一个对象的某一个属性时候，如果这个对象本身没有这个属性，那么他会去他的__proto__（即他的构造函数的protitype）中寻找
#原型链
f.toString()//要去f.__proto__.__proto__查找

#instanceof

> 用于判断引用类型 属于哪个 构造函数的方法  
变量 instanceof Array 
```
f instanceof Foo
原理其实就是原型链  一层一层往 看能否对应到Foo.prototype
```


#循环对象自身的属性
> for in 遍历自身定义的属性 高级浏览器屏蔽原型里面的属性    hasOwnProperty  判断属性是不是对象自身属性