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

6. 枚举类型
```

```