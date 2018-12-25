// 中间件 use  
// user 里面方法  第一个参数不传时候 默认的是/
// 中间件可以扩展方法  假如每个请求返回的都需要设置utf-8  
// 就会把下面对应能拦截道的都执行  默认不写第一个参数局势/ 这样可以匹配所有路由

// 在执行路由之前 要做一些处理  可以用中间件实现
const express = require('./express');
const app = express();
app.use(function(req,res,next){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    next('22');
})
app.get('/hello',(req,res) => {
    res.end('哈哈')
});
app.post('/hello',(req,res) => {
    res.end('哈哈')
});

// // all  代表匹配所有得方法  * 表示匹配所有得路径  all放最下面
// app.all('*',(req,res) => {
//     res.end('hi')
// })

// 错误中间件 放在最底部
app.use(function(err,req,res,next){
    console.log(err);
    next(err)
})
app.use(function(err,req,res,next){
    console.log(err);
})
app.listen(8080);