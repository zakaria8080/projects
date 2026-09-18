const prompt = require('prompt-sync')();
let a1 = parseFloat(prompt("type number a1 : "));
let a2 = parseFloat(prompt("type number a2 : "));;
let b1 = parseFloat(prompt("type number b1 : "));;
let b2 = parseFloat(prompt("type number b2 : "));;
let c1 = parseFloat(prompt("type number c1 : "));;
let c2 = parseFloat(prompt("type number c2 : "));;
const total = Math.sqrt((a2 - a1) ** 2 + (b2 - b1) ** 2 + (c2 - c1) ** 2);
console.log(total);
