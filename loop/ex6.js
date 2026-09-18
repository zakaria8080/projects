const prompt = require('prompt-sync')();
let f = Number(prompt("type a number : "));
let k = 2;
for (let j = 0; j <= f; j++) {
    let type = k + j;
    k++;
    console.log(type);
}