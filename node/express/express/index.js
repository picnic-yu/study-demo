const http = require('http');
const url = require('url');
function createApplication(){
    //app其实就是真正的请求监听函数
    let app = function (req,res){
        // 获取请求得方法
        let m = req.method.toLowerCase();
        // url.parse()可以将一个完整的URL地址，分为很多部分，常用的有：host、port、pathname、path、query。
        const {pathname} = url.parse(req.url,true);
        // 服务器监听，当匹配到对应得路由 执行回调函数
        for(let i =0;i<app.routes.length;i++){
            let route = app.routes[i];
            let {method,path,handler} =  app.routes[i];
            // all 和 * 是处理匹配所有方法和所有路径
            if((method === m || method==='all')&& (path === pathname || path==='*')){
                return handler(req,res);
            }
        }
        res.end('not');
    }
    http.METHODS.forEach((method) => {
        method = method.toLocaleLowerCase();//小写
        app[method] = function(path,handler){
            app.routes.push({
                method,
                path,
                handler
            })
        }
    });
    
    app.routes = [];
    app.all = function(path,handler){
        app.routes.push({
            method:'all',//匹配全部
            path,
            handler
        })
    }
    app.listen = function(){
        // 将app注入 建立一个服务器 监听得就是上面定义app得函数
        let server = http.createServer(app);
        
        server.listen.apply(server,arguments);
    }
    return app;
}
module.exports = createApplication;