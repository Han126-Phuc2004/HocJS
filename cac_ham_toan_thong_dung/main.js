//Math.sqrt
var a = Math.sqrt(16);
console.log(a); // 4

//Math.pow
var b = Math.pow(2, 3);
console.log(b); // 8

//Math.abs
var c = Math.abs(-10);
console.log(c); // 10

//Math.ceil lam tron len
var d = Math.ceil(4.2);
console.log(d); // 5

//Math.floor lam tron xuong
var e = Math.floor(4.7);
console.log(e); // 4

//Math.round lam tron gan nhat
var f = Math.round(4.5);
console.log(f); // 5

var x = 3.14159;
var xRounded = x.toFixed(2); // Lam tron den 2 chu so thap phan
console.log(xRounded); // "3.14"
console.log(typeof xRounded); // "string"

//Muon so thi ep sang number
console.log(Number(xRounded)); // 3.14
console.log(typeof Number(xRounded)); // "number"

//Min, max
var num1 = 10;
var num2 = 20;
var num3 = 5;

var minNum = Math.min(num1, num2, num3);
var maxNum = Math.max(num1, num2, num3);
console.log("Min:", minNum); // Min: 5
console.log("Max:", maxNum); // Max: 20

