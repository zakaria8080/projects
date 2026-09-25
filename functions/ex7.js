const prompt = require('prompt-sync')();
function puwer(a) {
    for (let i = a; i > 0; i--) {
        console.log(i);
    }
    return 0
}
let a = Number(prompt("type a number : "));

console.log(puwer(a));