const prompt = require('prompt-sync')();
function puwer(a) {
    if (a % 2 === 0) {
        return true
    }
    else {
        return false
    }
}
let a = Number(prompt("type a number : "));

console.log(puwer(a));