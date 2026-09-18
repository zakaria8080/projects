const prompt = require('prompt-sync')();
let lon = Number(prompt("type the lon : "));
let lar = Number(prompt("type the lar : "));
let sur = lon * lar;
console.log(sur);