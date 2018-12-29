"use strict";
var num = 22;
console.log(num);
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 0] = "success";
    Flag[Flag["error"] = 1] = "error";
})(Flag || (Flag = {}));
var f = Flag.success;
var ee;
console.log(ee);
function getInfo(name, age) {
    return "22";
}
getInfo('ss');
function sum(a, b, c) {
    return a + b + c;
}
function sum1() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i++; i <= result.length) {
        sum += result[i];
    }
    return sum;
}
function css(str) {
}
