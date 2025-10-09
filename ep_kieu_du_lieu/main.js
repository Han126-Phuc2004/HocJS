// ep kieu du lieu trong js

var numberA = prompt("Nhap so A: ");
console.log(typeof numberA);

//thuc hien tinh toan chua ep du lieu
var numberB = Number(prompt("Nhap so B: "));
console.log(typeof numberB);

// cong A + B
var total = numberA + numberB;
console.log(`A+B=${total}`);
console.log(typeof total);
// phep tinh khac kh anh huong
var total2 = numberA / numberB;
console.log(`A / B = ${total2}`);

// ep kieu parseInt/parseFloat/Number
var numberC = parseInt(prompt("Nhap so C: "));
console.log(numberC);
console.log(typeof numberC);
var numberD = Number(prompt("Nhap so D: "));
console.log(numberD);
console.log(typeof numberD);
console.log(numberD + numberB);