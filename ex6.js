const prompt = require('prompt-sync')();
let c = parseInt(prompt("type a number of list: "));
let b = [];
for (let n = 0; n < c; n++) {
    let q = Number(prompt("type : "))
    let o = Number(prompt("? : "))
    let t = o * q;
    b.push(t);
}
console.log(b);