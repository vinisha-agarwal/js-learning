const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966
//console.log(otherNumber.toPrecision(4)); //123.9
//console.log(otherNumber.toPrecision(3)); //123
//console.log(otherNumber.toPrecision(5)); 123.90

const OthNum = 1123.8967
// console.log(OthNum.toPrecision(3));  //1.12e+3
// console.log(OthNum.toPrecision(4)); //1124
// console.log(OthNum.toPrecision(5)); // 1123.9


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());  // one random value between 0 & 1 and including both
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // or console.log(Math.floor(Math.random() * (max - min + 1)) + min)