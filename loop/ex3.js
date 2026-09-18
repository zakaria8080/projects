const prompt = require('prompt-sync')();
let c = Number(prompt("type a number : "));
let type = 0;
for (let h = 1; h <= c; h++) {
    type += h;
    console.log(type);
}