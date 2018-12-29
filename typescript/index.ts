const num:number = 22;
console.log(num)
enum Flag {
    success=0,
    error=1
}
let f:Flag = Flag.success;
let ee:number|undefined;
console.log(ee)

function getInfo(name:string,age?:number):string{
    return "22"
}
getInfo('ss')
function sum(a:number,b:number,c:number):number{
    return a+b+c
}

function sum1(...result:number[]):number{
    var sum = 0;
    for(var i =0;i++;i<=result.length){
        sum+=result[i]
    }
    return sum
}

function css(config:any):any;
function css (age:any,value:any):number;
function css (str:any):any{

}