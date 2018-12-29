1. install typescript
> cnpm i typescript -g

2. 初始化tsconfig文件
tsc --init

3. vscode 运行任务 选择ts监视


## ts中数据类型
    布尔类型(boolean)
    数字类型(number)
    字符串类型(string)
    数组类型(array)
    元祖类型(tuple)
    枚举类型(enum)
    任意类型(any)
    null 和 undefined
    void类型
    never类型
//ts 中定义变量指定类型
1. 布尔类型
    var flag:boolean = true;
    flag = 22// error  
2. number
var num:number = 3;
3. string

var str:string ='33';

4. array  有2种方式
```
var arr:number[] = [11,22,33];
数组里面所有的item必须为number 
```

```
var arr:Array<number> = [11,22,11];
```

5. 元祖类型（tuple）属于数组的一种
```
let arr:[number,string] = [123,'22']
数组每一个位置设置类型
```

6. 枚举类型  如果标识符没有赋值  就是下标
```
enum Flag {
    SUCCESS=1,
    ERROR=1
}
let s:Flag= Flag.SUCCESS
```
7.  any类型
```
var oBox:any = document.getElementById('box');
oBox.style.color = 'red';
```

8.  其他类型的子类型  null 和undefined
```
let ee:number;
console.log(ee)//报错
let ee:number|undefined;
console.log(ee)
```
9. void 表示方法没有返回任何类型

10. never


### 函数
1. 函数的定义

```函数声明
function run () {

}
```
```匿名函数
var run2 = function(){

}
```
ts中定义函数方法
```函数声明法
function run():string{
    return '22'
}

```
```匿名函数
var fun2 = function() :number{
    return 123;
}

```
2. ts函数方法传参
```
function getInfo(name:string):string{
    return "22"
}
```
3. 可选参数   位置必须在最后面
es5方法的实参和形参可以不一样 ts中必须一样  如果不一样就需要配置可选参数
```
function getInfo(name:string,age?:number):string{
    return "22"
}
```
4. 默认参数
es5中无法设置默认参数  es6和ts可以设置
```
function getInfo(name:string,age:number=20):string{
    return "22"
}
```
5. 剩余参数 ...运算符接收形参传过来的值
```
function sum(a:number,b:number,c:number):number{
    return a+b+c
}
function sum(...result:number[]):number{
    var sum = 0;
    for(var i =0;i++;i<=result.length){
        sum+=result[i]
    }
    return sum
}
```
6. 函数重载  js中没有重载 ts同名函数传入不同参数 执行结果
```
function css(config:any):any{

}
function css (config:any,value:any){
    
}
```