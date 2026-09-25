const prompt = require('prompt-sync')();
function puwer(a) {
    return a * a;
}
let a = Number(prompt("type a number : "));

console.log(puwer(a));