"use strict";

// const bill1=275;
// const bill2=40;
// const bill3=430;
// const tip1= bill1>=50 && bill1<=300 ?  (15/100)*bill1 : (20/100)*bill1;
// console.log(`Tip1 for ${bill1} is ${tip1}` );
// console.log(`So total bill is ${bill1+tip1}`)
// const tip2= (bill2>=50 && bill2<=300) ?  (15/100)*bill2 : (20/100)*bill2;
// console.log(`Tip2 for ${bill2} is ${tip2}` );
// console.log(`So total bill is ${bill2+tip2}`)
// const tip3= bill3>=50 && bill3<=300 ?  (15/100)*bill3 : (20/100)*bill3;
// console.log(`Tip3 for ${bill3} is ${tip3}` );
// console.log(`So total bill is ${bill3+tip3}`)
var calcTip = function calcTip(bill) {
  return bill = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
var tips = [];
var totals = [];

for (var i = 0; i < bills.length; i++) {
  var tip = calcTip(bills[i]);
  tips.push(tip);
  console.log("Tip for ".concat(bills[i], " is ").concat(tips[i]));
  totals.push(tip + bills[i]);
  console.log("So total bill is ".concat(bills[i] + tips[i]));
}

console.log("Bills ", bills, "Tips ", tips, "Totals ", totals);

var calcAverage = function calcAverage(arr) {
  var sum = 0;

  for (var _i = 0; _i < arr.length; _i++) {
    sum += arr[_i];
  }

  console.log("Sum ", sum);
  return sum / arr.length;
};

console.log("Average ", calcAverage([2, 4, 7]));
console.log("Average of totals ", calcAverage(totals));
console.log("Average of tips ", calcAverage(tips));