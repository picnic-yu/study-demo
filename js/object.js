// Object.assign(target,source1,source2,...)

// 浅拷贝
// 该方法主要用于对象的合并，
// 将源对象source的所有可枚举属性合并到目标对象target上,
// 此方法只拷贝源对象的自身属性，不拷贝继承的属性 

// Object.create(prototype[,propertiesObject])
// 使用指定的原型对象及其属性去创建一个新的对象
var parent = {
    x : 1,
    y : 1
}
var child = Object.create(parent,{
    z : {                           // z会成为创建对象的属性
        writable:true,
        configurable:true,
        value: "newAdd"
    }
});
console.log(child)//{z:'newAdd'}


// Object.defineProperties(obj,props)
// 直接在一个对象上定义新的属性或修改现有属性，并返回该对象

var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
  // etc. etc.
});
console.log(obj)   // {property1: true, property2: "Hello"}



// Object.defineProperty(obj,prop,descriptor)
// 在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。


Object.defineProperty(Object, 'is', {
  value: function(x, y) {
    if (x === y) {
      // 针对+0 不等于 -0的情况
      return x !== 0 || 1 / x === 1 / y;
    }
    // 针对NaN的情况
    return x !== x && y !== y;
  },
  configurable: true,
  enumerable: false,
  writable: true 
}); 
 
// 注意不能同时设置(writable，value) 和 get，set方法，否则浏览器会报错 ： Invalid property descriptor. Cannot both specify accessors and a value or writable attribute

// Object.keys(obj)  获取对象的key  得到的是一个数组

let arr = ["a", "b", "c"];
console.log(Object.keys(arr));
// ['0', '1', '2']
 
/* Object 对象 */
let obj = { foo: "bar", baz: 42 },
    keys = Object.keys(obj);
console.log(keys);
// ["foo","baz"] 


// Object.values() 可枚举属性值 获取对象的value 得到的是一个数组 会过滤属性名为 Symbol 值的属性
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']
 
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']
// Object.entries()
// 返回一个给定对象自身可枚举属性的键值对数组

const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]
 
const simuArray = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(simuArray)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]


// hasOwnProperty()
// 判断对象自身属性中是否具有指定的属性。




// Object.getOwnPropertyDescriptor(obj,prop)
// 返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）.

// 如果指定的属性存在于对象上，则返回其属性描述符对象（property descriptor），否则返回 undefined。

var arr = ['name','age'] ;
arr.forEach(val => console.log(Object.getOwnPropertyDescriptor(obj,val)))
 
 
// {value: "js", writable: true, enumerable: true, configurable: true}
// undefined
 

//  Object.getOwnPropertyDescriptors(obj)
// 获取一个对象的所有自身属性的描述符。

var obj = {
    name : 'js',
    age : 20
}
console.log(Object.getOwnPropertyDescriptors(obj))


// Object.getOwnPropertyNames()
// 返回一个由指定对象的所有自身属性的属性名
// （包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。
var obj = { 0: "a", 1: "b", 2: "c"};
 
Object.getOwnPropertyNames(obj).forEach(function(val) {
  console.log(val);
});
 
 
var obj = {
    x : 1,
    y : 2
}
 
Object.defineProperty(obj,'z',{
    enumerable : false
})
console.log(Object.getOwnPropertyNames(obj))  // ["x", "y", "z"] 包含不可枚举属性 。
console.log(Object.keys(obj))                 // ["x", "y"]      只包含可枚举属性 。



// Object.getOwnPropertySymbols()
// 返回一个给定对象自身的所有 Symbol 属性的数组。

 

// Object.getPrototypeOf()
// 返回指定对象的原型（内部[[Prototype]]属性的值，即__proto__，而非对象的prototype）。

 

// isPrototypeOf()
// 判断一个对象是否存在于另一个对象的原型链上。

 

// Object.setPrototypeOf(obj,prototype)
// 设置对象的原型对象

 

// Object.is()
// 判断两个值是否相同。
// 如果下列任何一项成立，则两个值相同：

// 两个值都是 undefined
// 两个值都是 null
// 两个值都是 true 或者都是 false
// 两个值是由相同个数的字符按照相同的顺序组成的字符串
// 两个值指向同一个对象
// 两个值都是数字并且
// 都是正零 +0
// 都是负零 -0
// 都是 NaN
// 都是除零和 NaN 外的其它同一个数字
Object.is('foo', 'foo');     // true
Object.is(window, window);   // true
 
Object.is('foo', 'bar');     // false
Object.is([], []);           // false
 
var test = { a: 1 };
Object.is(test, test);       // true
 
Object.is(null, null);       // true
 
// 特例
Object.is(0, -0);            // false
Object.is(-0, -0);           // true
Object.is(NaN, 0/0);         // true

Object.freeze()
// 冻结一个对象，冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。
// 也就是说，这个对象永远是不可变的。该方法返回被冻结的对象。

// Object.isFrozen()
// 判断一个对象是否被冻结 .


// Object.preventExtensions()
// 对象不能再添加新的属性。可修改，删除现有属性，不能添加新属性。
var obj = {
    name :'lilei',
    age : 30 ,
    sex : 'male'
}
 
obj = Object.preventExtensions(obj);
console.log(obj);    // {name: "lilei", age: 30, sex: "male"}
obj.name = 'haha';
console.log(obj)     // {name: "haha", age: 30, sex: "male"}
delete obj.sex ;
console.log(obj);    // {name: "haha", age: 30}
obj.address  = 'china';
console.log(obj)     // {name: "haha", age: 30}