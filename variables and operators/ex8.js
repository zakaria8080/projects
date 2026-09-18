const prompt = require('prompt-sync')();
let a = parseFloat(prompt("type number a : "));
let b = parseFloat(prompt("type number b : "));
let c = parseFloat(prompt("type number c : "));
let MG = Math.sqrt(a * b * c);
console.log(MG);