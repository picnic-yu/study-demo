const express = require('./express');
const app = express();

app.get('/hellp',(req,res) => {
    res.end('hello')
});
app.listen(8080);