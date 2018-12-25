## 观察者模式
发布订阅
一对多
1. 例子
点咖啡，点好咖啡后坐等被叫

主题 保存状态 状态变化之后触发所有观察者
```
class  Subject {
    constructor(){
        this.state = 0
        this.observers = []
    }
    getState(){
        return this.state
    }
    setState(state){
        this.state = state
        this.notifyAllObservers()
    }
    notifyAllObservers(){
        this.observers.forEach((observer) => {
            observer.update()
        })
    }
    attach(observer){
        this.observers.push(observer)
    }
}
```
```
观察者

class Observer{
    constructor(name,subject){
        this.name = name
        this.subject = subject
        this.subject.attach(this)
    }
    update(){
        console.log(`${this.name} update`)
    }
}
```

```
test

let s = new Subject()
let o1 = new Observer('o1',s)
let o2 = new Observer('o2',s)
let o3 = new Observer('o3',s)
s.setState(1)
```

## 装饰器模式
1. 为对象添加新功能
2. 不改变其原有的结构和功能

```
class Circle{
    draw(){
        console.log('draw a cricle')
    }
}

class Decorator{
    constructor(circle){
        this.circle = circle
    }
    draw(){
        this.circle.draw()
        this.setRedBorder()
    }
    setRedBorder(){
        console.log('set red border')
    }
}
```


```
test
let circle = new Circle()
circle.draw()
let dec = new Decorator(circle)
dec.draw()
```


## 适配器模式

旧的接口格式和使用不兼容
中间加一个适配转换接口
```
class Adaptee{
    specificRequest(){
        return `德国标准插头`
    }
}
class Target{
    constructor(){
        this.adaptee = new Adaptee()
    }
    request(){
        let info = this.adaptee.specificRequest()
        return `${info}-转换器-中国`
    }
}
```
```
let target = new Target()
let res = target.request()
```
场景
封装旧接口
vue 属性计算


## 代理模式
使用者无权访问目标对象
中间加代理，通过代理做授权和控制
例子：明星经纪人

```
class ReadImg{
    construtor(fileName){
        this.fileName = fileName
        this.loadFormDisk()
    }
    display(){
        console.log('diaplsy...'+this.fileName)
    }
    loadFormDisk(){
        console.log('load...'+this.fileName)
    }
}
class ProxyImg{
    construtor(fileName){
        this.realImg = new ReadImg(fileName)
    }
    display(){
        this.realImg.diaplay()
    }
}
```

```
//test
let proxyImg = new ProxyImg('2.png')
proxyImg.display()
```


## 外观模式
为子系统中得一组接口提供一个高层接口  使用者使用这个高层接口，业务场景中用的比较多

示例 去医院看病，接待员去挂号、门诊、划价、取药