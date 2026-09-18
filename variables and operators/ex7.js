const prompt = require('prompt-sync')();
let a = parseFloat(prompt("type the first poid : "));
let b = parseFloat(prompt("type the second poid : "));
let c = parseFloat(prompt("type the third poid : "));
const d = (a * 2 + b * 3 + c * 5) / 10;
console.log(d);