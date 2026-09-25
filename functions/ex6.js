const prompt = require('prompt-sync')();
function puwer(a) {
    let w = 1;
    let b = 0;
    for (let i = 0; i <= a; i++) {
        w += b;
        b += w;
        console.log(w, b)
    }
    let c = w + b;
    return c
}
let a = Number(prompt("type a number : "));
console.log(puwer(a));