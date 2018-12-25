const express = require('./express');
const app = express();
app.get('/hello',(req,res) => {
    res.end('hello')
});
app.post('/hello',(req,res) => {
    res.end('hello')
});

// all  代表匹配所有得方法  * 表示匹配所有得路径  all放最下面
app.all('*',(req,res) => {
    res.end('hi')
})
app.listen(8080);