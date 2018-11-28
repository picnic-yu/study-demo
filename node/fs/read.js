let fs =require('fs');

fs.readFile('./1.txt',{
    encoding:'utf8',flag:'r'
},function(err,data){
    if(err){

    }else{
        console.log(data)
    }
})
// 追加写入
fs.writeFile('./2.txt','data',{
    encoding:'utf8',flag:'a'
},function(err,data){
    if(err){

    }else{
        console.log(data)
    }
})
// 追加文件 utf8是用来 buffur转换文字类型
fs.appendFile('./2.txt','哈哈','utf8',function(err){
    if(err){

    }
})

// 文件特别大的时候 大于内存是无法操作的
// 我们需要精确的控制读取的字节
// file dispcriptor 文件描述符
// 0 标准输入 1标准输出  2错误输出
//  process.stdout.write('ee')
fs.open('./1.txt','r',0o000,function(){
        
})