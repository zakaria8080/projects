const prompt = require('prompt-sync')();
const b = Number(prompt("type a number : "))
let con = 1;
for (let i = 1; i <= b; i++) {
    con *= i;
}
console.log(con);