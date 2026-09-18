const prompt = require('prompt-sync')();
let a = prompt("type number : ");
let b = "";
while (a > 0) {
    b = b + (a % 10);
    a = Math.floor(a / 10);
}
console.log(b);