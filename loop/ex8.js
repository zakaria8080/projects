const prompt = require('prompt-sync')();
let a = Number(prompt("type a number : "));
let i = 1;
var c = 0;
let j = 0;
while (j <= a) {

    c += i;
    i += c;
    console.log(`${i} + ${c}`);
    j++;
}
