// toan tu logic
var i = 7;

console.log(i > 0 && i < 10); // true
console.log(i > 0 && i > 10); // false
console.log(i > 0 || i < 5); // true
console.log(i > 0 || i > 10); // true
console.log(i < 0 || i > 10); // false
console.log(!(i > 10)); // true
console.log(!(i > 2)); // false


////Exercise 1: tinh chu vi, dien tich hinh tron
//var x = Number(prompt("Nhap ban kinh hinh tron"));
//var chuVi = 2 * Math.PI * x;
//console.log(`Chu vi hinh tron la: ${chuVi}`);
//var dienTich = Math.PI * x * x;
//console.log(`Dien tich hinh tron la: ${dienTich}`);

////Exercise 2: tinh chu vi, dien tich hinh chu nhat
//var chieuDai = Number(prompt("Nhap chieu dai hinh chu nhat"));
//var chieuRong = Number(prompt("Nhap chieu rong hinh chu nhat"));
//var chuViHCN = (chieuDai + chieuRong) * 2;
//var dienTichHCN = chieuDai * chieuRong;
//console.log(`Chu vi hinh chu nhat la: ${chuViHCN}`);
//console.log(`Dien tich hinh chu nhat la: ${dienTichHCN}`);


//Excercise 3: Nhap diem toan, van, anh, tinh diem trung binh va xuat kq lam tron 2 chu so
var diemToan = Number(prompt("Nhap diem toan"));
var diemVan = Number(prompt("Nhap diem van"));
var diemAnh = Number(prompt("Nhap diem anh"));

var dtb = (diemToan + diemVan + diemAnh) / 3;
console.log(`Diem trung binh la: ${dtb.toFixed(2)}`);
