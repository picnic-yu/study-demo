// Node模块
let EventEmitter = require('events');
let util = require('util');//node工具方法

function Bell(){
    EventEmitter.call(this);//继承私有方法

}
// 原型继承 继承公用 
util.inherits(Bell,EventEmitter)
let bell = new Bell();
// 学生进教室
function studentInRoom(){
    console.log('学生进教室');
}
// 老师进教室
function teacherInRoom(){
    console.log('老师进教室')
}
// 也是简单订阅发布模式
bell.on('响',studentInRoom)
bell.on('响',teacherInRoom)
bell.emit('响')