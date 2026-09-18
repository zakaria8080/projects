const prompt = require('prompt-sync')();
let d = Number(prompt("type a number : "));
let c = 1;
for (let j = 0; j <= d; j++) {
    let type = c + j;
    c++;
    console.log(type);
}