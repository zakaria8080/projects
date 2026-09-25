const prompt = require('prompt-sync')();
let a = Number(prompt("type a number : "));
for (let i = 0; i <= a; i++) {
    let c = "";
    for (let h = 0; h < a - i; h++) {
        c += " ";
    }
    for (let j = 0; j < (2 * i - 1); j++) {
        c += "*";
    }
    console.log(c);
}